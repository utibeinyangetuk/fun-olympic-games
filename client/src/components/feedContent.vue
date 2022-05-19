<template>
	<div class="tab-content" v-show="title === selectedTitle">
		<Card content="football">
			<ul>
				<li>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/2.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">Champions league finals</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
								magni iusto provident similique placeat vitae assumenda cumque
								quod repudiandae facilis ab, earum quidem fugiat aut velit nisi
								ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card>
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="tennis">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="javelin">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="golf">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="archery"> </Card>
		<Card content="fencing">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="diving">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="boxing">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="handball">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="athletics">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="baseball">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="rugby">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="sailing">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="shooting">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="wrestling">
			<ul>
				<li>
					<DataCard></DataCard>

					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="volleyball">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="taekwondo">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>

					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
		<Card content="karate">
			<ul>
				<li>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>
					<DataCard></DataCard>
				</li>
			</ul>
		</Card>
	</div>
</template>
<script>
	import DataCard from "./dataCard";
	import Card from "@/components/feedCard";
	import { inject } from "vue";
	export default {
		components: {
			DataCard,
			Card,
		},
		methods: {
			stream() {
				window.location.href = "https://www.youtube.com/";
			},
		},
		data() {
			return {
				heading: {
					"letter-spacing": "2px",
					"text-transform": "capitalize",
				},
				image: {
					width: "100%",
					"border-radius": "5px",
				},
				container: {
					height: "100%",
					display: "flex",
					"flex-direction": "column",
					"align-items": "center",
				},
				description: {
					color: "rgba(0, 0, 0, 0.485)",
					"font-size": "15px",
					"margin-bottom": "10px",
				},
				time: {
					"font-size": "14px",
				},
				btn: {
					border: "none",
					width: "360px",
					padding: "10px 20px",
					"letter-spacing": "2px",
					"border-radius": "5px",
					"font-weight": "bold",
					color: "#fff",
					cursor: "pointer",
					"background-color": "rgba(0, 0, 255, 0.447)",
				},
			};
		},
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

<style scoped>
	li {
		margin-top: 100px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
