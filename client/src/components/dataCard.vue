<template>
	<div class="card">
		<div class="header">
			<slot name="header"></slot>
		</div>
		<div class="content">
			<slot name="content"> </slot>
		</div>
		<div class="footer">
			<slot name="footer"> </slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: "dataCard",
	};
</script>

<style scoped>
	.card {
		background: #fff;
		padding: 8px;
		width: 400px;
		height: 400px;
		margin-bottom: 10px;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.1);
	}

	.card:hover {
		transform: scale(1.2);
	}

	.header {
		margin-top: 10px;
		margin-bottom: 3px;
	}
	.content {
		margin-bottom: 4px;
	}
	.footer {
		margin-left: 10px;
	}
</style>
