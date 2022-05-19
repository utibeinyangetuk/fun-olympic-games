<!-- Content page to show the links to the different streams -->

<template>
	<div class="card" v-show="content === selectedTitle">
		<div id="card-header">
			<slot name="header"></slot>
		</div>
		<div id="card-content">
			<slot name="content"></slot>
		</div>
		<div id="card-footer">
			<slot name="footer"></slot>
		</div>
		<div id="card-default">
			<slot>hello world</slot>
		</div>
	</div>
</template>
<script>
	import { inject } from "@vue/runtime-core";
	export default {
		name: "feedcard",
		props: ["content"],
		setup() {
			const selectedTitle = inject("selectedTitle");
			return {
				selectedTitle,
			};
		},
	};
</script>
<style scoped>
	.card {
		height: 830px;
		width: 100%;
		padding: 20px;
	}
</style>
