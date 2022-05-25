<template>
	<div class="tab-content" v-show="title === selectedTitle">
		<Card content="football">
			<ul>
				<li>
					<DataCard :style="container">
						<template #header>
							<img src="../assets/2.jpg" alt="#an image will be here" :style="image" />
						</template>

						<template #content>
							<h2 :style="heading">Champions league finals</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img src="../assets/4.jpg" alt="#an image will be here" :style="image" />
						</template>

						<template #content>
							<h2 :style="heading">Europa league finals</h2>
							<p :style="time">Date: 19th-may-2022</p>
							<p :style="time">Time: 21:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img src="../assets/7.jpg" alt="#an image will be here" :style="image" />
						</template>

						<template #content>
							<h2 :style="heading">Leicester vs Arsernal</h2>
							<p :style="time">Date: 21th-may-2022</p>
							<p :style="time">Time: 15:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img src="../assets/2.jpg" alt="#an image will be here" :style="image" />
						</template>

						<template #content>
							<h2 :style="heading">man city vs aston villa</h2>
							<p :style="time">Date: 22nd-may-2022</p>
							<p :style="time">Time: 14:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
				</li>
			</ul>
		</Card>
		<Card content="tennis">
			<ul>
				<li>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/tennis1.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">Men's singles</h2>
							<p :style="time">Date: 18th-june-2022</p>
							<p :style="time">Time: 10:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/tennis2.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">mixed doubles</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/tennis3.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">women's singles</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/tennis4.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">men's doubles</h2>
							<p :style="time">Date: Awaiting confirmation</p>
							<p :style="time">Time:Nil</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
				</li>
			</ul>
		</Card>
		<Card content="javelin">
			<h3>No content available for this segment yet.</h3>
		</Card>
		<Card content="golf">
			<ul>
				<li>
					<DataCard :style="container">
						<template #header>
							<img src="../assets/golf.jpg" alt="#an image will be here" :style="image" />
						</template>

						<template #content>
							<h2 :style="heading">P.G.A Championship</h2>
							<p :style="time">Date: Ongoing</p>
							<p :style="time">Time: Started 3hrs ago</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img src="../assets/golf.jpg" alt="#an image will be here" :style="image" />
						</template>

						<template #content>
							<h2 :style="heading">U.S Open</h2>
							<p :style="time">Date: 12th-june-2022</p>
							<p :style="time">Time: 12:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img src="../assets/golf.jpg" alt="#an image will be here" :style="image" />
						</template>

						<template #content>
							<h2 :style="heading">U.S Open</h2>
							<p :style="time">Date: 28th-june-2022</p>
							<p :style="time">Time: 7:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img src="../assets/golf.jpg" alt="#an image will be here" :style="image" />
						</template>

						<template #content>
							<h2 :style="heading">U.S Open</h2>
							<p :style="time">Date: 2nd-july-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
				</li>
			</ul>
		</Card>
		<Card content="archery">coming soon </Card>

		<Card content="diving"> </Card>

		<Card content="athletics">
			<ul>
				<li>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/athletics.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">4x4 men's relay</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/athletics.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">4x4 women's relay</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/athletics.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">men's 100 metres</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/athletics.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">women's 200 metres</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
				</li>
			</ul>
		</Card>

		<Card content="rugby">
			<ul>
				<li>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/rugby.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">women's sevens</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 2:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/rugby1.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">men's sevens</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/rugby2.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">rugby world cup</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
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
		<Card content="shooting"> All events have been cancelled. </Card>
		<Card content="volleyball">
			<ul>
				<li>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/volleyball1.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">beach pro tour 2022</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/volleyball.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">women's vnl final</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/volleyball1.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">USA vs japan</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
					<DataCard :style="container">
						<template #header>
							<img
								src="../assets/volleyball1.jpg"
								alt="#an image will be here"
								:style="image"
							/>
						</template>

						<template #content>
							<h2 :style="heading">france vs sweden</h2>
							<p :style="time">Date: 28th-may-2022</p>
							<p :style="time">Time: 22:00 GMT</p>
						</template>

						<template #footer>
							<p :style="description">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa magni iusto
								provident similique placeat vitae assumenda cumque quod repudiandae
								facilis ab, earum quidem fugiat aut velit nisi ut delectus nemo.
							</p>

							<button :style="btn" @click="stream">start streaming</button>
						</template>
					</DataCard>
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
		name: "feedContent",
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
					width: "380px",
					height: "300px",
					"border-radius": "5px",
				},
				container: {
					height: "100%",
					display: "flex",
					"flex-direction": "column",
				},
				description: {
					color: "rgba(0, 0, 0, 0.485)",
					"font-size": "15px",
					"margin-bottom": "10px",
					"margin-left": "-10px",
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

	.tab-content {
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>
