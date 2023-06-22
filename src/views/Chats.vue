<template>
	<div class="wrapper">
		<ListChats/>
		<div class="image">
			<img src="https://images.unsplash.com/photo-1624318462623-7a29dbb84e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="alt">
		</div>
	</div>
</template>
<script>
import ListChats from "../components/ListChats.vue";

export default {
	components: {
		ListChats,
	}
}
</script>
<style lang="sass" scoped>
.wrapper
	display: flex
	height: 100%
.image
	position: relative
	width: 100%
	height: 100%
	img
		position: absolute
		inset: 0
		width: 100%
		height: 100%
</style>
