<template>
	<div>
		<FeedTab>
			<FeedContent title="football" />
			<FeedContent title="tennis" />
			<FeedContent title="javelin" />
			<FeedContent title="golf" />
			<FeedContent title="archery" />
			<FeedContent title="fencing" />
			<FeedContent title="diving" />
			<FeedContent title="boxing" />
			<FeedContent title="handball" />
			<FeedContent title="athletics" />
			<FeedContent title="baseball" />
			<FeedContent title="rugby" />
			<FeedContent title="sailing" />
			<FeedContent title="shooting" />
			<FeedContent title="volleyball" />
			<FeedContent title="wrestling" />
			<FeedContent title="taekwondo" />
			<FeedContent title="karate" />
		</FeedTab>
	</div>
</template>

<script>
	import FeedContent from "../components/feedContent";
	import FeedTab from "../components/feedTab";
	export default {
		components: {
			FeedContent,
			FeedTab,
		},
		name: "feed",
	};
</script>

<style scoped></style>
