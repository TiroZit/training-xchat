import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/chats",
		name: "Chats",
		component: () => import('/views/Chats.vue'),
		children: [
			{
				path: ":id/",
				name: "Chat",
				component: () => import('/views/Chat.vue'),
				props: true,
			},
		]
	},
	{
		path: "/:pathMatch(.*)",
		name: "NotFound",
		component: () => import('/views/NotFound.vue'),
	}
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
