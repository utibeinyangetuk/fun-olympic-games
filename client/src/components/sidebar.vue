<template>
	<div class="sidebar">
		<ul>
			<router-link to="/user/dashboard">
				<li><i class="uil uil-estate"></i>Home</li>
			</router-link>

			<router-link to="/user/feed">
				<li><i class="uil uil-chart-line"></i>Feeds</li>
			</router-link>

			<router-link to="/issue">
				<li><i class="uil uil-exclamation-triangle"></i>Report an issue</li>
			</router-link>

			<router-link to="/settings">
				<li><i class="uil uil-setting"></i>Settings</li>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "sidebar",
	};
</script>

<style scoped>
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
		color: #000;
	}

	.sidebar ul li i {
		margin: 20px;
		font-size: 30px;
		cursor: pointer;
	}

	.sidebar ul li:hover {
		color: rgb(3, 3, 142);
	}
</style>
