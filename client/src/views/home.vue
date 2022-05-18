<template>
	<section>
		<header>
			<h2 class="animate__animated animate__jackInTheBox">✨FOG-2022✨</h2>
			<div class="navigation animate__animated animate__fadeInRight">
				<router-link to="/contact-us"> contact us </router-link>
				<router-link to="/login"> login </router-link>
				<router-link to="/signup"> signup </router-link>
			</div>
		</header>

		<div class="info animate__animated animate__fadeInLeft">
			<h2>welcome to the <br /></h2>
			<span>Fun olympic games 2022.</span>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum
				nihil ea ipsa labore molestias earum. Totam, magnam eius at consequuntur
				commodi reiciendis, cum ducimus quam officiis id a iusto! Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Vitae dolorum consequuntur
				commodi reiciendis, cum ducimus quam officiis id a iusto!
			</p>
			<div class="info-btn">
				<p>More Info<i class="uil uil-arrow-right"></i></p>
			</div>
		</div>
	</section>
	<router-view />
</template>

<script>
	import "animate.css";
	export default {
		name: "home",
	};
</script>

<style scoped>
	section {
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-size: cover;
		background-position: center;
	}

	header {
		position: relative;
		top: 0;
		width: 100%;
		padding: 30px 100px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	header .logo {
		position: relative;
		color: #000;

		display: inline-block;
		font-size: 20px;
		animation: bounce;
		animation-duration: 4s;
		font-weight: bold;
		letter-spacing: 1px;
	}

	header .navigation a {
		color: #000;
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
		font-weight: bold;
		padding: 10px 30px;
		border-radius: 5px;
		text-transform: capitalize;
		letter-spacing: 2px;
	}

	header .navigation a:hover {
		border: 1px solid rgba(236, 224, 224, 0.498);
		box-shadow: none;
	}

	header .navigation a:not(:last-child) {
		margin-right: 30px;
	}

	.info {
		margin-left: 30%;
		animation-duration: 3s;
	}

	.info h2 {
		color: rgba(132, 87, 5, 0.583);
		font-size: 25px;

		margin-left: 220px;
		text-transform: uppercase;
		letter-spacing: 2px;
		line-height: 60px;
		margin-bottom: 10px;
		margin-top: 130px;
	}

	.info span {
		color: #000;
		font-weight: 700;
		font-size: 45px;
		margin-left: 25px;
		text-transform: uppercase;
		letter-spacing: 2px;
		line-height: 60px;
		margin-bottom: 30px;
	}

	.info p {
		margin-top: 10px;
		width: 700px;
		font-size: 20px;
		color: rgba(0, 0, 0, 0.284);
		border: 1px solid rgba(236, 224, 224, 0.498);
		box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.1);
		margin-bottom: 20px;
		border-radius: 5px;
		padding: 0px 100px 0 100px;
	}

	.info-btn p {
		margin-left: 250px;
		color: #000;

		width: 200px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		font-weight: 700;
		letter-spacing: 2px;
		padding: 10px 20px;
		border-radius: 4px;
		text-transform: uppercase;
		cursor: pointer;
	}
</style>
