<template>
	<div class="label">
		<slot/>
	</div>
</template>
<script>
export default {
	name: "Label",
}
</script>
<style lang="sass" scoped>
.label
	max-width: max-content
	font-size: 16px
	line-height: 18px
	color: #fff
	padding: 8px 16px
	border-radius: 16px
	background: rgba(239, 238, 236, 0.25)
</style>
