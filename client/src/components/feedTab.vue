<template>
	<div class="tabs">
		<ul class="header">
			<li
				v-for="title in tabTitles"
				:key="title"
				@click="selectedTitle = title"
				:class="{ active: title === selectedTitle }"
			>
				{{ title }}
			</li>
		</ul>
		<slot />
	</div>
</template>
<script>
	import { ref, provide } from "vue";
	export default {
		name: "feedTab",
		setup(props, { slots }) {
			// slots.default give us an array of all the nodes in tab component slot
			const tabTitles = ref(slots.default().map((tab) => tab.props.title));
			const selectedTitle = ref(tabTitles.value[0]);
			provide("selectedTitle", selectedTitle);
			return {
				selectedTitle,
				tabTitles,
			};
		},
	};
</script>
<style scoped>
	.tabs {
		height: 100vh;
		margin: 0 auto;
		margin-top: 5px;
		overflow: hidden;
	}

	.header {
		padding: 0;
		display: flex;
	}

	.header li {
		width: 200px;
		height: 50px;
		text-align: center;
		padding: 10px 20px;
		cursor: pointer;
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 2px;
		transition: 0.8s all ease-in-out;
		color: #000;
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
		border-radius: 5px;
		text-transform: capitalize;
		margin-right: 5px;
	}

	.header li.active {
		border: 1px solid rgba(128, 128, 128, 0.415);
		background: rgba(236, 224, 224, 0.149);
		box-shadow: none;
		border-radius: 5px;
	}
</style>
