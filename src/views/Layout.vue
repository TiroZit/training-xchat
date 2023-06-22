<script>
import { defineComponent } from 'vue'

export default defineComponent({
	name: "Layout",
})
</script>

<template>
	<div class="layout" v-cloak>
		<router-view v-slot="{Component}">
			<component :is="Component"/>
		</router-view>
	</div>
</template>

<style lang="sass" scoped>

</style>
