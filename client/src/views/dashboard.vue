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
						<span>Here are some of the hottest games going on right now...</span>
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
	.wrapper {
		margin: auto;
		display: flex;
		background: url("../assets/9.jpg");
	}
	.main {
		background: url("../assets/9.jpg");
	}

	.head {
		display: flex;
		padding: 20px 30px;
	}
	.head h2 {
		letter-spacing: 2px;
		color: rgb(3, 3, 142);
	}

	.logout {
		width: 400px;
		margin-left: 70%;
	}

	.logout button {
		padding: 10px 40px;
		color: red;
		border: none;
		border-radius: 5px;
		font-size: 20px;
		border: 1px solid;
		box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
		transition: all ease-in 1s;
		font-weight: bold;
		background: transparent;
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
		color: rgb(3, 3, 142);
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
	}

	.balance-details li a:hover {
		text-decoration: underline;
		color: rgb(133, 9, 125);
	}
</style>
