<template>
	<div class="form-container">
		<Navbar />
		<div class="container">
			<div class="forms">
				<div class="form login">
					<div class="message">
						<p v-if="message.error != ''" :style="error">{{ message.error }}</p>
						<p v-if="message.success != ''" :style="success">
							{{ message.success }}
						</p>
					</div>

					<span class="title">Signup </span>

					<form @submit.prevent="register">
						<div class="input-field">
							<input
								type="text"
								placeholder="Enter your username"
								required
								v-model="username"
							/>
							<i class="uil uil-user" />
						</div>
						<div class="input-field">
							<input
								type="email"
								placeholder="Enter your email"
								required
								v-model="email"
							/>
							<i class="uil uil-envelope"></i>
						</div>
						<div class="input-field">
							<input
								type="password"
								placeholder="Enter your password"
								required
								v-model="password"
							/>
							<i class="uil uil-lock"></i>
						</div>
						<div class="input-field">
							<input
								type="password"
								placeholder="Confirm your password"
								required
								v-model="confirmPassword"
							/>
							<i class="uil uil-lock"></i>
						</div>
						<div class="button">
							<button type="submit">Signup</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Navbar from "../components/navbar";
	import axios from "axios";
	export default {
		components: { Navbar },
		name: "signup",
		data() {
			return {
				username: "",
				email: "",
				password: "",
				confirmPassword: "",
				message: {
					error: "",
					success: "",
				},
				error: {
					"background-color": "rgba(255, 0, 0, 0.692)",
				},
				success: {
					"background-color": " rgba(32, 174, 32, 0.486)",
				},
			};
		},
		methods: {
			async register() {
				const userData = {
					username: this.username,
					email: this.email,
					password: this.password,
					confirmPassword: this.confirmPassword,
				};
				await axios
					.post("/api/users/signup", userData)
					.then((response, error) => {
						if (response.data.success) {
							// successful signup
							this.message.success = response.data.success;
							setTimeout(() => {
								this.$router.push("/user/dashboard");
							}, 2000);
						} else if (response.data.error) {
							// failed signup
							this.message.error = response.data.error;
							setTimeout(() => {
								this.message.error = "";
							}, 3000);
							this.$router.push("/signup");
						} else {
							throw error;
						}
					})
					.catch((e) => {
						throw e;
					});
			},
		},
	};
</script>

<style scoped>
	.form-container:before {
		content: "";
		position: fixed;
		width: 100vw;
		height: 100%;
		background: url("../assets/9.jpg");
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		-webkit-background-size: cover;
		background-size: cover;
		-webkit-filter: blur(7px);
		-moz-filter: blur(7px);
		filter: blur(7px);
	}

	.container {
		margin-top: 6%;
		background: rgba(255, 255, 255, 0.495);
		position: absolute;
		left: 37%;
		width: 100%;
		max-width: 450px;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.074);
	}

	.forms {
		padding: 30px;
		height: 100%;
	}

	.title {
		font-size: 20px;
		font-weight: 600;
		position: relative;
	}

	.title::before {
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		height: 1px;
		width: 100%;
		background-color: #000;
		border-radius: 25px;
	}

	.input-field {
		margin-top: 30px;
		position: relative;
		width: 85%;
		height: 50px;
	}

	.input-field input {
		position: absolute;
		height: 100%;
		width: 100%;
		padding: 0 30px;
		border: none;
		outline: none;
		border-bottom: 1px solid #000;
		font-size: 14px;
		transition: all 2s ease-in-out;
		background: transparent;
	}

	.input-field input::placeholder {
		color: rgba(17, 15, 15, 0.506);
	}
	.input-field i {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
		color: #000;
		font-size: 23px;
	}

	.button {
		margin-top: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button button {
		padding: 8px;
		border-radius: 3px;
		width: 40%;
		letter-spacing: 2px;
		font-weight: 700;
		font-size: 15px;
		background: transparent;
		cursor: pointer;
	}
	.message p {
		padding: 5px 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		letter-spacing: 2px;
		margin-bottom: 10px;
		border-radius: 5px;
	}
</style>
