import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home";
import forgotPassword from "@/views/forgotPassword";
import dashboard from "@/views/dashboard";
import login from "@/views/login";
import signup from "@/views/signup";
import feed from "@/views/feed";
import notfound from "@/views/404";
import contact from "@/views/contact";

const isUserLoggedIn = false;

const routes = [
	{
		path: "/",
		name: "home",
		component: home,
	},
	{
		path: "/user/dashboard",
		name: "dashboard",
		component: dashboard,
		meta: {
			needAuth: true,
		},
	},
	{
		path: "/login",
		name: "login",
		component: login,
	},
	{
		path: "/signup",
		name: "signup",
		component: signup,
	},
	{
		path: "/contact-us",
		name: "contactUs",
		component: contact,
	},
	{
		path: "/passwordReset",
		name: "passwordReset",
		component: forgotPassword,
	},
	{
		path: "/user/feed",
		name: "feed",
		component: feed,
		meta: {
			needAuth: true,
		},
	},

	// catch all unregistered routes
	{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: notfound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

// setting up protected routes
router.beforeEach((to, from, next) => {
	// to and from are both route objects. must call `next`.
	if (to.meta.needAuth) {
		if (isUserLoggedIn) {
			next();
		} else {
			// restrict access and redirect to login
			next("/login");
		}
	} else {
		// grant access
		next();
	}
});

export default router;
