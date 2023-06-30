import { defineStore } from "pinia";

export const useChatStore = defineStore("chatStore", {
	state: () => ({
		chats: [
			{
				id: 1,
				name: "andrie",
				image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				messages: [
					{
						id: 1,
						time: "11:00",
						text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi incidunt, aliquam minima ad ut similique reiciendis ab dolore a? Error ab repellendus culpa asperiores, nostrum fuga accusantium, rerum perferendis, dolore distinctio commodi officia incidunt rem. Labore suscipit reiciendis quos quas blanditiis iste optio tenetur quia maiores nobis praesentium vitae incidunt eligendi illum est animi voluptatum perferendis temporibus corporis modi, tempore dolorum aliquid. Maxime corrupti tenetur fugiat cum exercitationem consectetur accusantium modi tempore debitis, nisi quae nam consequuntur culpa. Doloribus odit omnis consectetur vel id eaque at incidunt iste. Aliquam voluptatem rem sit iusto ipsa natus autem ratione voluptas molestias.",
						imageSrc: "",
						imageAlt: "",
						type: "own",
					},
					{
						id: 2,
						time: "12:46",
						text: "lorem",
						imageSrc: "",
						imageAlt: "",
						type: "others",
					}
				],
				users: [
					{
						id: 1,
					}
				],
			},
		]
	}),
	getters: {
	},
	actions: {
		getDataChat(id) {
			const response = this.chats.find((el) => (el.id == id))
			const data = {
				id: response.id,
				name: response.name,
				image: response.image,
				lastMessage: response.messages[response.messages.length-1].text,
				lastTime: response.messages[response.messages.length-1].time,
			}

			return data
		},
		getChat(id) {
			return this.chats.find((el) => (el.id == id))
		},
	},
})
