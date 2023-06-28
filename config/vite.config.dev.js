import { resolve } from "path";
import { defineConfig } from "vite";
import { path } from "./settings.js";
import vue from "@vitejs/plugin-vue";
import Unfonts from "unplugin-fonts/vite";
import imagemin from "unplugin-imagemin/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
	root: resolve(process.cwd(), path.srcFolder),
	base: "",
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			sass: {
			},
		},
	},
	plugins: [
		vue(),
		Unfonts({
			// Fontsource API
			fontsource: {
				/**
				 * Fonts families lists
				 */
				families: [
					{
						/**
						 * Name of the font family.
						 * Require the `@fontsource/roboto` package to be installed.
						 */
						name: "Manrope",
						/**
						 * Load only a subset of the font family.
						 */
						weights: [400, 700],
					},
				],
			},
		}),
		imagemin({
			// Default mode squoosh. support squoosh and sharp
			mode: "sharp",
		}),
		Components({
      resolvers: [
        IconsResolver(),
      ],
    }),
		Icons({
			// experimental
			autoInstall: true,
			compiler: 'vue3',
		}),
	],
	server: {
		port: 8080,
	},
});
