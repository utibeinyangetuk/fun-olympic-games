<template>
	<div class="notfound">
		<h1>404</h1>
	</div>
	<div class="redirect">
	<router-link class="btn" :to="{ name: 'home' }"> Take me home. </router-link>
	</div>

</template>

<script>
	export default {
		name: "notfound",
	};
</script>

<style scoped>
	.notfound {
		display: flex;
		justify-content: center;
	}

	.notfound h1{
			font-size: 400px;
	letter-spacing: 2px;
	}

.redirect{
		justify-content: center;
		display: flex;
}


	.btn{

		background: gray;
		color: #fff;
		padding: 10px 20px;
		font-size:20px;font-weight: bold;
		border-radius: 5px;
	}
</style>
