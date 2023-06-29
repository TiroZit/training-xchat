import { defineStore } from "pinia";

export const useChatsStore = defineStore("chatsStore", {
	state: () => ({
		chats: [
			{
				id: 1,
				chats: [
					{
						id: 1,
					},
				]
			},
		]
	}),
	getters: {
		getChat: (state) => (id) => {
			return state.chats.filter((el) => (el.id == id))[0]
		},
	},
})
