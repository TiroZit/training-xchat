<script>
import {defineComponent} from 'vue'
import Popup from "../components/Popup.vue";
import CustomInput from "../components/CustomInput.vue";
import {useUsersStore} from "../stores/useUsersStore.js";
import {useVuelidate} from "@vuelidate/core";
import {email, helpers, required, sameAs} from "@vuelidate/validators";

export default defineComponent({
	name: "Registration",
	components: {
		Popup,
		CustomInput,
	},
	props: {
	},
	setup() {
		const usersStore = useUsersStore()

		return {
			usersStore,
			v$: useVuelidate(),
		}
	},
	data() {
		return {
			firstName: "",
			lastName: "",
			mail: "",
			phone: "",
			login: "",
			password: "",
			passwordConfirm: "",
		}
	},
	methods: {
		async handleSubmit () {
			const result = await this.v$.$validate()

			if (!result) return

			let user = {
				id: this.usersStore.users.length + 1,
				firstName: this.firstName,
				lastName: this.lastName,
				mail: this.mail,
				phone: this.phone,
				login: this.login,
				password: this.password,
			}

			this.usersStore.users.push(user)

			this.$router.push("/auth")
		},
	},
	validations () {
		return {
			login: {required},
			mail: {required, email},
			password: {required},
			passwordConfirm: {
				required,
				sameAs: sameAs(this.password)
			}
		}
	}
})
</script>

<template>
	<form @submit.prevent="handleSubmit" class="m-auto" action="#">
		<Popup>
			<template v-slot:title>
				Sign up
			</template>
			<template v-slot:subtitle>
				Create account to start messaging
			</template>
			<template v-slot:body>
				<CustomInput v-model="login" :placeholder-value="`Login`"/>
				<div class="flex gap-5">
					<CustomInput v-model="firstName" :placeholder-value="`First name`"/>
					<CustomInput v-model="lastName" :placeholder-value="`Last name`"/>
				</div>
				<CustomInput v-model="mail" :type-value="`mail`" :placeholder-value="`E-mail`"/>
				<CustomInput v-model="phone" :type-value="`number`" :placeholder-value="`Phone`"/>
				<CustomInput v-model="password" :type-value="`password`" :placeholder-value="`Password`"/>
				<CustomInput v-model="passwordConfirm" :type-value="`password`" :placeholder-value="`Confirm password`"/>
				<div v-for="error in v$.$errors" class="mt-2 text-red-700">
					{{error.$property}} - {{error.$message}}
					<br>
				</div>
			</template>
			<template v-slot:footer>
				<button type="submit" class="button">
					Sign up
				</button>
				<div class="text-center mt-6">
					Already have an account?
				</div>
				<router-link to="/auth" class="m-auto mt-2">
					Sign in
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
