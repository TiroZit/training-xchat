<template>
	<div class="chats">
		<div class="chats__wrapper">
			<div class="chats__header">
				<i-material-symbols-settings-outline style="width: 28px; height: 28px; margin-right: 24px; flex-shrink: 0;"/>
				<Search/>
			</div>
			<div class="chat__body">
				<Chat/>
			</div>
		</div>
	</div>
</template>
<script>
import Search from "./Search.vue";
import Chat from "./Chat.vue";

export default {
	name: "ListChats",
	components: {
		Search,
		Chat,
	}
}
</script>
<style lang="sass" scoped>
.chats
	min-width: 628px
	height: 100%
	border-right: 1px solid #6F91B4
	&__wrapper
		height: 100%
		padding: 32px 32px 0 32px
	&__header
		display: flex
		align-items: center
		color: #6F91B4
		border-bottom: 1px solid #6F91B4
		padding-bottom: 24px
</style>
