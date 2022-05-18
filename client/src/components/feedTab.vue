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
		margin: 0 auto;
	}

	.header {
		margin-top: 30px;
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
		box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

		text-transform: capitalize;
	}

	.header li.active {
		border: 1px solid rgba(128, 128, 128, 0.415);
		border-bottom: none;
		background: rgba(236, 224, 224, 0.149);
		box-shadow: none;

		/*`   border: 1px solid;
        border-bottom: 1px solid #fff;  */
	}
</style>
