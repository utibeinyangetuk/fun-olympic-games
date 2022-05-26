<template>
	<Navbar/>

	<div class="contact-box">
		<form>
		<h2 class="heading">contact us</h2>
			<input type="text" class="input-field" placeholder="Your email" />
			<input type="text" class="input-field" placeholder="Message heading" />
			<textarea
				class="input-field textarea"
				type="text"
				placeholder="Your message"
				cols="30"
				rows="30"
			/>
			<button type="submit">send message</button>
		</form>
	</div>
</template>

<script>
	import Navbar from '../components/navbar'
export default {
  components: { Navbar },
		name: "contactUs",
	};
</script>

<style scoped>
	.contact-box {
		background-color: #fff;
		width: 500px;
		box-shadow: 0 0 5px 0 #999;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: 5px;
	}
	form {
		margin: 35px;
	}
	.heading{
		text-decoration: underline;
	}
	.input-field {
		border-radius: 5px;
		width: 400px;
		height: 40px;
		margin-top: 15px;
		padding-left: 10px;
		border: 1px solid #777;
		outline: none;
	}

	.textarea {
		height: 150px;
		padding-top: 10px;
	}
	button {
		padding: 8px;
		margin-top: 10px;
		border-radius: 5px;
		letter-spacing: 1px;
		font-weight: bold;
		border: 1px solid gray;
		cursor: pointer;
		font-size: 15px;
	}
</style>
