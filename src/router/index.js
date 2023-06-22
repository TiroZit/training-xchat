import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "Главная",
		component: () => import('/views/Chats.vue'),
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
