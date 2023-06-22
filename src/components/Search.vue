<template>
	<div class="search">
		<div class="search__icon">
			<i-material-symbols-search style="width: 24px; height: 24px;"/>
		</div>
		<input type="text" class="search__input" placeholder="Search"/>
	</div>
</template>
<script>
export default {
	name: "Search",
}
</script>
<style lang="sass" scoped>
.search
	position: relative
	width: 100%
	&__icon
		position: absolute
		left: 16px
		top: 50%
		transform: translateY(-50%)
	&__input
		width: 100%
		height: 40px
		font-size: 16px
		padding: 11px
		padding-left: 56px
		border: 1px solid #6F91B4
		border-radius: 8px
		&::placeholder
			color: currentColor
</style>
