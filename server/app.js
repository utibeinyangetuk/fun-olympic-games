// imports
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { pool } = require("./database/dbconfig");
const cookieSession = require("cookie-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

//setting up middlewares
dotenv.config();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(
	cookieSession({
		name: "testsession",
		keys: ["randomauthkey"],
		maxAge: 24 * 60 * 60 * 1000, //24hrs
	})
);
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: false,
	})
);
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());

// setting up passport strategy
const authenticateuser = (email, password, done) => {
	pool.query(`select * from users where email=$1`, [email], (err, results) => {
		if (err) {
			throw err;
		}
		if (results.rows.length > 0) {
			const user = results.rows[0];
			// use bcrypt to compare the saved password with the one typed by the user
			bcrypt.compare(password, user.password, (err, isMatch) => {
				// wrong password
				if (err) {
					throw err;
				}
				// correct password
				if (isMatch) {
					return done(null, user);
				} else {
					console.log("password is incorrect");
					return done(null, false, { message: "Password is incorrect." });
				}
			});
		} else {
			console.log("Email does not exist");
			return done(null, false, { message: "This email does not exist." });
		}
	});
};

// use the localStrategy to check the user's input
passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			passwordField: "password",
		},
		authenticateuser
	)
);
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
	pool.query(`select * from users where id=$1`, [id], (err, results) => {
		if (err) {
			throw err;
		} else {
			return done(null, results.rows[0]);
		}
	});
});
// End of passport strategy

// routes
// login route
app.post("/api/users/login", async (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			return next(err);
		}
		// throw error if credentials are wrong
		if (!user) {
			console.log("invalid Credentials");
			return res.send({ error: "Incorrect email or password" });
		} else {
			res.send({ success: "Login successful" });
		}
	})(req, res, next);
});

// signup route
app.post("/api/users/signup", async (req, res) => {
	let { username, email, password } = req.body;
	console.log(req.body);
	try {
		let hashedPassword = await bcrypt.hash(password, 10);

		pool.query(
			// checking database to see if the user exists
			`SELECT * FROM users WHERE email = $1`,
			[email],
			(error, results) => {
				if (error) {
					throw error;
				} else {
					if (results.rows.length > 0) {
						res.send({ error: " This email already exist." });
					} else {
						pool.query(
							// if user doesn't exist, then register the user
							`INSERT INTO users (username,email,password) VALUES ($1,$2,$3)`,
							[username, email, hashedPassword],
							(err, results) => {
								if (err) {
									throw err;
								}
								console.log("Registration successful");
								res.send({
									success: "Registration successful.",
								});
							}
						);
					}
				}
			}
		);
	} catch (error) {
		throw error;
	}
});

// logout route
app.get("/api/user/logout", function (req, res) {
	req.logout();
	console.log("logged out");
	res.send("you have been logged out");
});

// setup the server
app.listen(process.env.PORT, () => {
	console.log(`server running on http://localhost:${process.env.PORT}/`);
});

module.exports = app;
