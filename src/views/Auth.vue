<script>
import {defineComponent} from 'vue'
import Popup from "../components/Popup.vue";
import CustomInput from "../components/CustomInput.vue";

export default defineComponent({
	name: "Auth",
	components: {
		Popup,
		CustomInput,
	},
	props: {
	},
	data() {
		return {
			loginValue: "",
			passwordValue: "",
		}
	},
})
</script>

<template>
	<Popup>
		<template v-slot:title>
			Welcome back!
		</template>
		<template v-slot:subtitle>
			Login to continue
		</template>
		<template v-slot:body>
			<CustomInput v-model="loginValue" :placeholder-value="`Login`"/>
			<CustomInput v-model="passwordValue" :type-value="`password`" :placeholder-value="`Password`"/>
		</template>
		<template v-slot:footer>

		</template>
	</Popup>
</template>

<style scoped lang="sass">

</style>
