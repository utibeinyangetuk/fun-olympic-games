<template>
	<div class="wrapper">
		<Sidebar />
		<div class="main">
			<div class="head">
				<div class="head-title">
					<h2>Dashboard</h2>
				</div>

				<div class="logout">
					<button @click="logout">Logout</button>
				</div>
			</div>

			<div class="main-board">
				<div class="card-board">
					<div class="card">
						<div class="card-icon">
							<i class="uil uil-chart-line"></i>
							<i class="uil uil-ellipsis-v"></i>
						</div>

						<span>Ongoing Games...</span>
						<div class="button">
							<button @click="message">view</button>
						</div>
					</div>
					<div class="card">
						<div class="card-icon">
							<i class="uil uil-chart-line"></i>
							<i class="uil uil-ellipsis-v"></i>
						</div>

						<span>Ongoing Games...</span>
						<div class="button">
							<button @click="message">view</button>
						</div>
					</div>
					<div class="card">
						<div class="card-icon">
							<i class="uil uil-chart-line"></i>
							<i class="uil uil-ellipsis-v"></i>
						</div>

						<span>Ongoing Games...</span>
						<div class="button">
							<button @click="message">view</button>
						</div>
					</div>
					<div class="card">
						<div class="card-icon">
							<i class="uil uil-chart-line"></i>
							<i class="uil uil-ellipsis-v"></i>
						</div>

						<span>Ongoing Games...</span>
						<div class="button">
							<button @click="message">view</button>
						</div>
					</div>
				</div>

				<div class="head">
					<div class="head-title">
						<h2>🔥Trending Games🔥</h2>
						<span>Here are some of the hottest games for today...⬇️</span>
					</div>
				</div>

				<div class="card-cover">
					<div class="balance">
						<div class="balance-details">
							<ul class="details">
								<li class="topic">football</li>
								<li><a href="https://www.youtube.com/">manchester derby</a></li>
								<li><a href="https://www.youtube.com/">liverpool vs real madrid</a></li>
								<li><a href="https://www.youtube.com/">arsernal vs chelsea</a></li>
								<li><a href="https://www.youtube.com/">fulham vs liverpool</a></li>
								<li><a href="https://www.youtube.com/">man u vs everton</a></li>
								<li><a href="https://www.youtube.com/">norwich vs watford</a></li>
								<li><a href="https://www.youtube.com/">lazio vs hellas verona</a></li>
								<li><a href="https://www.youtube.com/">freiburg vs bayern munich</a></li>
								<li><a href="https://www.youtube.com/">barcelona vs athletico</a></li>
								<li><a href="https://www.youtube.com/">lille vs rennes</a></li>
							</ul>
						</div>
					</div>
					<div class="balance">
						<div class="balance-details">
							<ul class="details">
								<li class="topic">swimming</li>
								<li><b>No available content.</b></li>
							</ul>
						</div>
					</div>
					<div class="balance">
						<div class="balance-details">
							<ul class="details">
								<li class="topic">basket ball</li>
								<li><a href="https://www.youtube.com/">celtic vs lakers</a></li>
								<li><a href="https://www.youtube.com/">NBA finals highlight</a></li>
							</ul>
						</div>
					</div>
					<div class="balance">
						<div class="balance-details">
							<ul class="details">
								<li class="topic">Tennis</li>
								<li><a href="https://www.youtube.com/">Florence vs Janae</a></li>
								<li><a href="https://www.youtube.com/">Monserrate vs Frederik</a></li>
								<li><a href="https://www.youtube.com/">Keenan vs Fatima</a></li>
								<li><a href="https://www.youtube.com/">Roscoe vs Daisha</a></li>
								<li><a href="https://www.youtube.com/">Orpha vs Ofelia</a></li>
								<li><a href="https://www.youtube.com/">Alyce vs Jon</a></li>
								<li><a href="https://www.youtube.com/">Kane vs Nadia</a></li>
								<li><a href="https://www.youtube.com/">Susie vs Abagail</a></li>
								<li><a href="https://www.youtube.com/">Rafael vs Aida</a></li>
								<li><a href="https://www.youtube.com/">nadal vs selena</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<slot />
</template>

<script>
	import Sidebar from "../components/sidebar";
	import axios from "axios";
	export default {
		name: "dashboard",
		components: { Sidebar },

		methods: {
			async logout() {
				await axios
					.get("/api/user/logout")
					.then((response) => {
						if (response) {
							this.$router.push("/");
						}
					})
					.catch((err) => {
						throw err;
					});
			},
			message() {
				alert("Games cannot be accessed at the moment.");
			},
		},
	};
</script>

<style scoped>
	.head-title span {
		margin-left: 20px;
		font-weight: bold;
	}
	.wrapper {
		margin: auto;
		display: flex;
		background: rgb(185, 183, 215);
		background: linear-gradient(
			90deg,
			rgba(185, 183, 215, 1) 0%,
			rgba(247, 247, 247, 1) 41%,
			rgba(245, 245, 245, 0.7931547619047619) 100%,
			rgba(0, 212, 255, 1) 100%
		);
	}
	.main {
		background: rgb(185, 183, 215);
		background: linear-gradient(
			90deg,
			rgba(185, 183, 215, 1) 0%,
			rgba(247, 247, 247, 1) 41%,
			rgba(245, 245, 245, 0.7931547619047619) 100%,
			rgba(0, 212, 255, 1) 100%
		);
	}

	.head {
		display: flex;
		padding: 20px 30px;
	}
	.head h2 {
		letter-spacing: 2px;
		color: #000;
	}

	.logout button {
		background: rgba(255, 0, 0, 0.587);
		position: absolute;
		left: 80%;
		width: 150px;
		height: 50px;
		font-weight: bold;
		font-size: 20px;
		color: #fff;
		letter-spacing: 2px;
		border: 1px solid red;
		border-radius: 5px;
		cursor: pointer;
		box-shadow: 0 5px 8px rgba(0, 0, 0, 0.4);
	}

	.card-board {
		display: flex;
		padding: 15px 40px;
	}

	.card {
		width: 430px;
		height: 200px;
		padding: 30px;
		background: rgba(255, 255, 255, 0.407);
		margin-right: 8px;
		border-radius: 5px;
		box-shadow: 0 5px 8px rgba(0, 0, 0, 0.1);
		margin-right: 40px;
	}

	.card button {
		background: transparent;
		margin-top: 10px;
		padding: 8px 30px;
		border-radius: 5px;
		border: 1px solid rgba(128, 128, 128, 0.486);
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
		letter-spacing: 2px;
		font-size: 15px;
		font-weight: bold;
	}

	.card-icon {
		display: flex;
	}

	.card-icon i {
		margin: 15px 0;
		font-size: 25px;
		margin-right: 20rem;
	}

	.card span {
		font-size: 15px;
		font-weight: bold;
		letter-spacing: 1px;
		color: rgb(60, 57, 57);
	}

	.card-cover {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.balance {
		display: flex;
		justify-content: center;
		width: 437px;
		min-height: 420px;
		margin: 20px 0px 0px 45px;
		background: rgba(255, 255, 255, 0.407);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		padding: 20px 30px;
		border-radius: 5px;
	}

	.topic {
		font-size: 20px;
		font-weight: bold;
		text-transform: capitalize;
		letter-spacing: 2px;
		text-decoration: underline;
		color: #000;
	}

	.balance-details li {
		margin: 8px 0;
	}

	.balance-details li a {
		font-size: 18px;
		letter-spacing: 2px;
		color: rgba(0, 0, 0, 0.277);
		font-weight: bold;
		text-decoration: none;
		text-transform: capitalize;
	}

	.balance-details li a:hover {
		text-decoration: underline;
		color: rgb(133, 9, 125);
	}
</style>
