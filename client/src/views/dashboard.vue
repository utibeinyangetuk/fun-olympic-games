<template>
	<div class="wrapper">
		<div class="sidebar">
			<ul>
				<router-link to="/user/dashboard">
					<li class="active"><i class="uil uil-estate"></i>Home</li>
				</router-link>
				<router-link to="/user/feed">
					<li><i class="uil uil-chart-line"></i>Feeds</li>
				</router-link>

				<li><i class="uil uil-exclamation-triangle"></i>Report an issue</li>
				<li><i class="uil uil-setting"></i>Settings</li>
			</ul>
		</div>

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
				<marquee direction="right">
					<div class="card-board">
						<div class="card">
							<div class="card-icon">
								<i class="uil uil-chart-line"></i>
								<i class="uil uil-ellipsis-v"></i>
							</div>

							<span>Ongoing Games...</span>
							<div class="button">
								<button>view</button>
							</div>
						</div>
						<div class="card">
							<div class="card-icon">
								<i class="uil uil-chart-line"></i>
								<i class="uil uil-ellipsis-v"></i>
							</div>

							<span>Ongoing Games...</span>
							<div class="button">
								<button>view</button>
							</div>
						</div>
						<div class="card">
							<div class="card-icon">
								<i class="uil uil-chart-line"></i>
								<i class="uil uil-ellipsis-v"></i>
							</div>

							<span>Ongoing Games...</span>
							<div class="button">
								<button>view</button>
							</div>
						</div>
						<div class="card">
							<div class="card-icon">
								<i class="uil uil-chart-line"></i>
								<i class="uil uil-ellipsis-v"></i>
							</div>

							<span>Ongoing Games...</span>
							<div class="button">
								<button>view</button>
							</div>
						</div>
					</div>
				</marquee>

				<div class="head">
					<div class="head-title">
						<h2>🔥Trending Games🔥</h2>
						<span
							>Here are some of the hottest games going on right now...</span
						>
					</div>
				</div>

				<div class="card-cover">
					<div class="balance">
						<div class="balance-details">
							<ul class="details">
								<li class="topic">football</li>
								<li><a href="#">manchester derby</a></li>
								<li><a href="#">liverpool vs real madrid</a></li>
								<li><a href="#">23-05-2022</a></li>
								<li><a href="#">24-05-2022</a></li>
								<li><a href="#">25-05-2022</a></li>
								<li><a href="#">26-05-2022</a></li>
								<li><a href="#">27-05-2022</a></li>
								<li><a href="#">28-05-2022</a></li>
								<li><a href="#">29-05-2022</a></li>
								<li><a href="#">01-06-2022</a></li>
							</ul>
						</div>
					</div>
					<div class="balance">
						<div class="balance-details">
							<ul class="details">
								<li class="topic">tennis</li>
								<li><a href="#">21-05-2022</a></li>
								<li><a href="#">22-05-2022</a></li>
								<li><a href="#">23-05-2022</a></li>
								<li><a href="#">24-05-2022</a></li>
								<li><a href="#">25-05-2022</a></li>
								<li><a href="#">26-05-2022</a></li>
								<li><a href="#">27-05-2022</a></li>
								<li><a href="#">28-05-2022</a></li>
								<li><a href="#">29-05-2022</a></li>
								<li><a href="#">01-06-2022</a></li>
							</ul>
						</div>
					</div>
					<div class="balance">
						<div class="balance-details">
							<ul class="details">
								<li class="topic">basket ball</li>
								<li><a href="#">21-05-2022</a></li>
								<li><a href="#">22-05-2022</a></li>
								<li><a href="#">23-05-2022</a></li>
								<li><a href="#">24-05-2022</a></li>
								<li><a href="#">25-05-2022</a></li>
								<li><a href="#">26-05-2022</a></li>
								<li><a href="#">27-05-2022</a></li>
								<li><a href="#">28-05-2022</a></li>
								<li><a href="#">29-05-2022</a></li>
								<li><a href="#">01-06-2022</a></li>
							</ul>
						</div>
					</div>
					<div class="balance">
						<div class="balance-details">
							<ul class="details">
								<li class="topic">swimming</li>
								<li><a href="#">21-05-2022</a></li>
								<li><a href="#">22-05-2022</a></li>
								<li><a href="#">23-05-2022</a></li>
								<li><a href="#">24-05-2022</a></li>
								<li><a href="#">25-05-2022</a></li>
								<li><a href="#">26-05-2022</a></li>
								<li><a href="#">27-05-2022</a></li>
								<li><a href="#">28-05-2022</a></li>
								<li><a href="#">29-05-2022</a></li>
								<li><a href="#">01-06-2022</a></li>
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
	import axios from "axios";
	export default {
		name: "dashboard",
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
		},
	};
</script>

<style scoped>
	.wrapper {
		margin: auto;
		display: flex;
	}

	.sidebar {
		width: 100px;
		height: 100vh;
		border: 1px solid rgba(0, 0, 0, 0.149);
	}

	.sidebar ul {
		margin-top: 50px;
	}

	.sidebar ul li {
		list-style: none;
		text-align: center;
		display: flex;
		justify-content: space-evenly;
		flex-direction: column;
		margin-bottom: 15px;
	}

	.sidebar ul li i {
		margin: 20px;
		font-size: 30px;
		cursor: pointer;
	}

	.sidebar ul li:hover,
	li.active {
		border-right: 5px solid #000;
	}

	.head {
		display: flex;
		padding: 20px 30px;
	}
	.head h2 {
		letter-spacing: 2px;
	}

	.logout {
		width: 400px;
		margin-left: 70%;
	}

	.logout button {
		padding: 10px 40px;
		color: #000;
		border: none;
		border-radius: 5px;
		font-size: 20px;
		border: 1px solid;
		box-shadow: none;
		transition: all ease-in 1s;
		font-weight: bold;
		background: transparent;
	}

	.logout button:hover {
		box-shadow: 0 8px 10px rgba(0, 0, 0, 0.2);
	}

	.card-board {
		display: flex;
		padding: 15px 40px;
	}

	.card {
		width: 350px;
		height: 200px;
		padding: 30px;
		background: rgba(255, 255, 255, 0.21);
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
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
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
		margin-right: 15rem;
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
		margin: 20px 0px 0px 45px;
		background: rgba(255, 255, 255, 0.21);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
		padding: 20px 30px;
		border-radius: 5px;
	}

	.topic {
		font-size: 20px;
		font-weight: bold;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-decoration: underline;
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
		color: palevioletred;
	}
</style>
