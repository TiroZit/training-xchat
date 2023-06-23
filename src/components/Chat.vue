<template>
	<router-link :to="{ name: 'Chat', params: { id: chat.id } }" class="chat">
		<div class="chat__wrapper">
			<div class="chat__image">
				<img :src="chat.image" :alt="chat.name">
			</div>
			<div class="chat__info">
				<div class="chat__title">
					{{ chat.name }}
				</div>
				<div class="chat__subtitle">
					{{ getLastElement(chat.messages).text }}
				</div>
			</div>
			<div class="chat__footer">
				<div class="chat__time">
					{{ getLastElement(chat.messages).time }}
				</div>
				<div class="chat__notification">
					4
				</div>
			</div>
		</div>
	</router-link>
</template>
<script>
export default {
	name: "Chat",
	props: {
		chat: {}
	},
	methods: {
		getLastElement: (array) => {
			return array[array.length - 1]
		},
	},
}
</script>
<style lang="sass" scoped>
.chat
	display: block
	padding-top: 16px
	&[aria-current]
		background: rgba(111, 145, 180, 0.20)
	&__wrapper
		display: flex
		padding-bottom: 16px
		border-bottom: 1px solid #6F91B4
	&__image
		position: relative
		width: 64px
		height: 64px
		margin-right: 24px
		border-radius: 50%
		background-color: #6F91B4
		img
			border-radius: 50%
	&__info
		flex: 1 1 auto
	&__title
		font-size: 18px
		font-weight: 600
		color: #354753
	&__subtitle
		font-size: 16px
		font-weight: 500
		color: #6F91B4
	&__footer
		display: flex
		flex-direction: column
		justify-content: space-between
	&__notification
		display: flex
		justify-content: center
		align-items: center
		font-size: 11px
		font-weight: 500
		margin-left: auto
		width: 20px
		height: 20px
		background-color: #6F91B4
		border-radius: 50%
		color: #fff
</style>
