import { defineStore } from "pinia";
import {useChatStore} from "./useChatStore.js";

const chatStore = useChatStore()

export const useChatsStore = defineStore("chatsStore", {
	state: () => ({
		chats: [
			{
				id: 1,
				chats: [
					{
						id: 1,
					},
					{
						id: 2,
					},
				]
			},
		]
	}),
	getters: {
	},
	actions: {
		getChats(id) {
			return this.chats.find((el) => (el.id == id))
		},
		getDataChat(chats) {
			return chats.map((chat) => {
				return chatStore.getDataChat(chat.id);
			});
		},
	},
})
