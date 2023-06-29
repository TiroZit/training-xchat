<script>
import {defineComponent} from 'vue'
import Popup from "../components/Popup.vue";
import CustomInput from "../components/CustomInput.vue";
import axios from "axios";
import {useUsersStore} from "../stores/useUsersStore.js";

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
	setup() {
		const usersStore = useUsersStore()

		return {
			usersStore,
		}
	},
	mounted() {
	},
	methods: {
		handleSubmit() {
			const auth = this.usersStore.auth(this.loginValue, this.passwordValue)

			if (auth === undefined) {
				alert("Логин или пароль неверны")
				return
			}

			this.$router.push("/chats")
		},
	},
})
</script>

<template>
	<form @submit.prevent="handleSubmit" action="#" class="m-auto">
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
				<button type="submit" class="button">
					Sign in
				</button>
				<router-link :to="{name: 'Registration'}" class="m-auto mt-2">
					Sign up
				</router-link>
			</template>
		</Popup>
	</form>
</template>

<style scoped lang="sass">
.button
	width: 100%
	color: #FFF
	font-size: 16px
	font-weight: 500
	line-height: 24px
	padding: 8px 0
	border-radius: 8px
	background: #6F91B4
</style>
