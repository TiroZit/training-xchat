import { defineStore } from "pinia";

export const useChatsStore = defineStore("chatsStore", {
	state: () => ({
		chats: [
			{
				id: 1,
				name: "andrie",
				image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				messages: [
					{
						id: 1,
						time: "",
						text: "",
						type: "own",
					},
					{
						id: 2,
						time: "10:46",
						text: "asda",
						type: "others",
					}
				]
			}
		]
	}),
})
