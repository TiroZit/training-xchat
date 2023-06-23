<template>
	<div class="wrapper">
		<ListChats/>
		<div class="image">
			<Label v-if="$route.path === '/chats'" class="m-auto">
				Select a chat to start messaging
			</Label>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import { defineComponent } from "vue"
import ListChats from "../components/ListChats.vue";
import Label from "../components/Label.vue";

export default defineComponent({
	name: "Chats",
	components: {
		ListChats,
		Label,
	}
})
</script>
<style lang="sass" scoped>
.wrapper
	display: flex
	height: 100%
.image
	position: relative
	display: flex
	width: 100%
	height: 100%
	background-image: url("/assets/img/background.jpg")
	background-size: cover
	background-repeat: no-repeat
	background-position: center
</style>
