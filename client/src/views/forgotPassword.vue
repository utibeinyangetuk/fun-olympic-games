<template>
<Sidebar/>
	<div class="form-container">
		<div class="container">
			<div class="forms">
				<div class="form login">
					<span class="title">Reset Your Password </span>

					<form>
						<div class="input-field">
							<input
								type="text"
								placeholder="Enter your email"
								v-model="email"
							/>
							<i class="uil uil-envelope"></i>
						</div>

						<div class="input-field">
							<input
								type="password"
								placeholder="Enter your new password"
								v-model="password"
							/>
							<i class="uil uil-lock"></i>
						</div>

						<div class="button">
							<button type="submit">RESET</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '../components/sidebar'
export default {
  components: { Sidebar },
		name: "passwordReset",
		data() {
			return {
				email: "",
				password: "",
			};
		},
	};
</script>

<style scoped>
	.form-container {
		margin-top: -970px;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.container {
		position: relative;
		width: 100%;
		max-width: 450px;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.074);
	}

	.forms {
		padding: 30px;
	}

	.title {
		letter-spacing: 2px;
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
		margin-top: 50px;
		position: relative;
		width: 95%;
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
		margin-top: 55px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.button button {
		padding: 8px;
		border-radius: 3px;
		width: 40%;
		letter-spacing: 2px;
		font-weight: 900;
		font-size: 15px;
		background: transparent;
		cursor: pointer;
	}
	form {
		height: 250px;
	}
</style>
