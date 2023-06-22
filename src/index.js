import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "/App.vue";
import router from "/router";

import "/scripts/index.js";
import "unfonts.css";
import "/styles/index.sass";

document.addEventListener("DOMContentLoaded", () => {
	const app = createApp(App);
	const pinia = createPinia();

	app.config.unwrapInjectedRef = true;

	app
		.use(router)
		.use(pinia)
		.mount("#app");
});
