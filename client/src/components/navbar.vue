<template>
	<div>
		<header>
			<h2 class="logo">✨FOG-2022✨</h2>
			<div class="navigation animate__animated animate__fadeInRight">
				<router-link to="/"> Home </router-link>
				<router-link to="/contact-us"> contact us </router-link>
				<router-link to="/login"> login </router-link>
				<router-link to="/signup"> signup </router-link>
			</div>
		</header>
	</div>
</template>

<script>
	export default {
		name: "navbar",
	};
</script>

<style scoped>
	header {
		position: relative;
		top: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: transparent;
	}

	header .logo {
		position: relative;
		color: #000;
		display: inline-block;
		font-size: 25px;
		animation: fadeInLeft;
		animation-duration: 4s;
		font-weight: bold;
		letter-spacing: 1px;
	}

	header .navigation a {
		color: #000;
		border: 1px solid rgba(236, 224, 224, 0.249);
		font-weight: bold;
		padding: 10px 30px;
		border-radius: 5px;
		text-transform: capitalize;
		letter-spacing: 2px;
	}

	header .navigation a:not(:last-child) {
		margin-right: 50px;
	}

	.navigation a:hover {
		background: rgba(34, 0, 255, 0.141);
	}

	.navigation a.router-link-active {
		color: #fff;
		background: rgba(34, 0, 255, 0.443);
		box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
	}
</style>
