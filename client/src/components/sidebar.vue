<template>
	<div class="sidebar">
		<ul>
			<router-link to="/user/dashboard">
				<li><i class="uil uil-estate" />Home</li>
			</router-link>

			<router-link to="/user/feed">
				<li><i class="uil uil-chart-line" />Feeds</li>
			</router-link>

			<router-link to="/issue">
				<li><i class="uil uil-exclamation-triangle" /> issues</li>
			</router-link>

			<router-link to="/settings">
				<li><i class="uil uil-setting" />Settings</li>
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
		color: rgb(133, 9, 125);
	}
</style>
