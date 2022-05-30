<template>
	<div class="contact-box">
		<form>
			<h2 class="heading">Report an issue</h2>
			<input type="email" class="input-field" placeholder="Your email" />
			<input type="text" class="input-field" placeholder=" Heading" />
			<textarea
				class="input-field textarea"
				type="text"
				placeholder="message..."
				cols="30"
				rows="30"
			/>
			<div class="button"><button>submit</button></div>
		</form>
	</div>
</template>

<script>
	export default {
		name: "issue",
	};
</script>

<style scoped>
	.contact-box {
		background-color: #fff;
		width: 700px;
		border: 1px solid rgba(153, 153, 153, 0.422);
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border-radius: 5px;
	}
	form {
		margin: 35px;
	}
	.heading {
		text-decoration: underline;
	}
	.input-field {
		border-radius: 5px;
		width: 600px;
		height: 40px;
		margin-top: 15px;
		padding-left: 10px;
		border: 1px solid #777;
		outline: none;
	}

	.textarea {
		height: 250px;
		padding-top: 10px;
	}
	.button {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	button {
		padding: 8px;
		margin-top: 10px;
		border-radius: 5px;
		letter-spacing: 2px;
		font-weight: bold;
		border: 1px solid #999;
		cursor: pointer;
		font-size: 15px;
		background: transparent;
		width: 200px;
	}
</style>
