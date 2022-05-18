<template>
	<div class="tab-content" v-show="title === selectedTitle">
		<Card content="football">
			<h3>how are you</h3>
			<ul>
				<li>
					<a href="#">first match</a>
				</li>
			</ul>
		</Card>
		<Card>
			<h3>hello again</h3>
		</Card>
		<Card content="tennis">
			<h3>🔥🔥🔥🔥🔥🔥🔥🔥🔥</h3>
		</Card>
		<Card content="javelin">
			<h3>Yooooo!!!The code worked</h3>
		</Card>
		<Card content="golf">
			<h3>musk here</h3>
		</Card>
		<Card content="archery"> </Card>
		<Card content="fencing">
			<h3>Batman.The killing joke</h3>
		</Card>
		<Card content="diving">
			<h3>music</h3>
		</Card>
		<Card content="boxing">
			<h3>Batman.The killing joke</h3>
		</Card>
		<Card content="handball">
			<h3>Batman.The brave and the bold</h3>
		</Card>
		<Card content="athletics">
			<h3>dsilpcpcc</h3>
		</Card>
		<Card content="baseball">
			<h3>sdou8ui,9u,uixdsli7op</h3>
		</Card>
		<Card content="rugby">
			<h3>9708kuotxk8xusk</h3>
		</Card>
		<Card content="sailing">
			<h3>8l78l87l867l</h3>
		</Card>
		<Card content="shooting">
			<h3>t54y5uyrtuhioll9</h3>
		</Card>
		<Card content="wrestling">
			<h3>eqrtqrtqget</h3>
		</Card>
		<Card content="volleyball">
			<h3>require('qfgdgdgfdf')</h3>
		</Card>
		<Card content="taekwondo">
			<h3>tretertertet</h3>
		</Card>
		<Card content="karate">
			<h3>etrerete</h3>
		</Card>
	</div>
</template>
<script>
	import Card from "@/components/feedCard";
	import { inject } from "vue";
	export default {
		components: { Card },
		name: "tab",
		props: ["title"],
		setup() {
			const selectedTitle = inject("selectedTitle");
			return {
				selectedTitle,
			};
		},
	};
</script>
