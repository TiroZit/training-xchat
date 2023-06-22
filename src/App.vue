<template>
	<Layout/>
</template>

<script>
import { defineAsyncComponent } from "vue"

export default {
	components: {
		Layout: defineAsyncComponent({
			loader: () => import("/views/Layout.vue"),
		})
	},
}

</script>

<style></style>
