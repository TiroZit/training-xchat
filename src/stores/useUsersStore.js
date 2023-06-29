import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
	state: () => ({
		users: [
			{
				id: 1,
				login: "",
				firstName: "",
				lastName: "",
				mail: "",
				phone: "",
				password: "",
				chatsId: 1,
			}
		]
	}),
	actions: {
		auth(login, password){
			return this.users.find((el) => (el.login === login && el.password === password))
		},
	}
})
