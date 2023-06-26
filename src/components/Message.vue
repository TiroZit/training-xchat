<template>
	<div :class="`message ${messageModifierClass}`">
		<p v-if="message.text" class="mb-1">
			{{ message.text }}
		</p>
		<img v-if="message.imageSrc" :src="message.imageSrc" :alt="message.imageAlt">
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
	computed: {
		messageModifierClass() {
			if (this.message.type === "own") {
				return "message_own"
			} else return "message_others"
		}
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
	&_own
		align-self: flex-end
		background-color: #F5E7C9
	&__time
		position: absolute
		bottom: 16px
		right: 16px
		font-size: 9px
		font-weight: 500
		line-height: 1
</style>
