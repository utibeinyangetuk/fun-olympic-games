<template>
	<section>
		<Navbar />

		<div class="info animate__animated animate__bounceInUp">
			<h2>welcome to the <br /></h2>
			<span>Fun olympic games 2022.</span>
			<p :style="bg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum
				nihil ea ipsa labore molestias earum. Totam, magnam eius at consequuntur
				commodi reiciendis, cum ducimus quam officiis id a iusto! Lorem ipsum
				dolor sit amet consectetur adipisicing elit. Vitae dolorum consequuntur
				commodi reiciendis, cum ducimus quam officiis id a iusto!
			</p>
			<div class="info-btn">
				<router-link to="/signup">
					<p>Get started<i class="uil uil-arrow-right"></i></p>
				</router-link>
			</div>
		</div>
	</section>
	<router-view />
</template>

<script>
	import Navbar from "../components/navbar";
	import "animate.css";
	export default {
		components: { Navbar },
		name: "home",
		data() {
			return {
				bg: {
					background: "rgba(255, 255, 255, 0.136)",
					border:'none'
				},
			};
		},
	};
</script>

<style scoped>
	section:before {
		content: "";
		position: fixed;
		width: 100vw;
		height: 100vh;
		background: url("../assets/bball2.jpg");
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		-webkit-background-size: cover;
		background-size: cover;
		-webkit-filter: blur(6px);
		-moz-filter: blur(6px);
		filter: blur(6px);
	}

	section {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		background-size: cover;
		background-position: center;
	}

	.info {
		margin-left: 30%;
		animation-duration: 3s;
	}

	.info h2 {
		color: #fff;
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
		color: #000;
		box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
		border: 1px solid rgba(236, 224, 224, 0.498);
		box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.027);
		margin-bottom: 20px;
		border-radius: 5px;
		padding: 0px 100px 0 100px;
	}

	.info-btn p {
		margin-left: 250px;
		color: #000;
		width: 230px;
		box-shadow: 0 2px 3px rgba(0, 0, 0, 0.027);
		font-weight: 700;
		letter-spacing: 2px;
		padding: 10px 20px;
		border-radius: 4px;
		text-transform: uppercase;
		cursor: pointer;
	}
	.info-btn p:hover {
		background-color: rgba(0, 128, 128, 0.501);
	}
</style>
