import { defineStore } from "pinia";

export const useUsersStore = defineStore("usersStore", {
	state: () => ({
		users: [
			{
				id: 1,
				login: "",
				firstname: "",
				lastname: "",
				mail: "",
				phone: "",
				password: "",
			}
		]
	}),
})
