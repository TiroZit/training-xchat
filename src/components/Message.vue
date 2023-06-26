<template>
	<div class="message">
		<p>
			{{ message.text }}
		</p>
		<div class="message__time">
			{{ message.time }}
		</div>
	</div>
</template>
<script>
export default {
	name: "Message",
	props: {
		message: {},
	},
}
</script>
<style lang="sass" scoped>
.message
	display: flex
	max-width: 484px
	flex-direction: column
	position: relative
	background-color: #fff
	color: #354753
	font-weight: 500
	font-size: 14px
	line-height: 18px
	padding: 16px
	padding: 29px
	border-radius: 16px
	margin-bottom: 16px
	word-wrap: break-word
	&__time
		position: absolute
		bottom: 16px
		right: 16px
		font-size: 9px
		font-weight: 500
		line-height: 1
</style>
