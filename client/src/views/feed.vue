<template>
	<div>
		<FeedTab>
			<FeedContent title="football" />
			<FeedContent title="tennis" />
			<FeedContent title="javelin" />
			<FeedContent title="golf" />
			<FeedContent title="archery" />
			<FeedContent title="diving" />
			<FeedContent title="athletics" />
			<FeedContent title="rugby" />
			<FeedContent title="sailing" />
			<FeedContent title="shooting" />
			<FeedContent title="volleyball" />
		</FeedTab>
	</div>
</template>

<script>
	import FeedContent from "../components/feedContent";
	import FeedTab from "../components/feedTab";
	export default {
		name: "feed",
		components: {
			FeedContent,
			FeedTab,
		},
	};
</script>
