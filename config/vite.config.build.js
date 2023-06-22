import { readdirSync, statSync } from "node:fs"
import { resolve, join, extname } from "path"
import { defineConfig } from "vite"
import { path } from "./settings.js"
import pug from "@macropygia/vite-plugin-pug-static"
import commonjs from "@rollup/plugin-commonjs"
import babel from "@rollup/plugin-babel"
import autoprefixer from "autoprefixer"
import sortMediaQueries from "postcss-sort-media-queries"
import postcssShort from "postcss-short"
import cssnanoPlugin from "cssnano"
import stylelint from 'vite-plugin-stylelint';

const pagesDir = resolve(process.cwd(), path.srcFolder)
const searchDirectory = (dir, ext, excludeDir) => {
	const files = readdirSync(dir)
	let result = []

	files.forEach((file) => {
		const filePath = join(dir, file)
		const fileStat = statSync(filePath)

		if (fileStat.isDirectory() && file !== excludeDir) {
			result = result.concat(searchDirectory(filePath, ext, excludeDir))
		} else if (fileStat.isFile() && extname(file) === ext) {
			result.push(filePath)
		}
	})

	return result
}

const pages = searchDirectory(pagesDir, ".pug", "templates")

export default defineConfig({
	root: resolve(process.cwd(), path.srcFolder),
	base: "./",
	build: {
		modulePreload: false,
		outDir: resolve(process.cwd(), path.buildFolder),
		rollupOptions: {
			input: pages.reduce((acc, file) => {
				const name = file.replace(/\.pug$/, "") // убираем расширение .pug из имени файла
				acc[name] = file // добавляем имя файла и его путь в объект
				return acc
			}, {}),
			output: {
				manualChunks: (id) => {
					if (id.includes("src")) return "index"
					if (id.includes("node_modules")) return "vendor"
				},
				chunkFileNames: "scripts/[name].js",
				entryFileNames: "scripts/index.js",
				assetFileNames: ({ name }) => {
					if (/\.css$/.test(name ?? "")) {
						return "styles/main.css"
					}
					if (/.(woff2|woff)$/.test(name ?? "")) {
						return "fonts/[name][extname]"
					}
					if (/.(ico|jpg|png|webp|avif|svg)$/.test(name ?? "")) {
						return "img/[name][extname]"
					}
					if (/.(mp4)$/.test(name ?? "")) {
						return "videos/[name][extname]"
					}
					return "assets/[name][extname]"
				},
			},
		},
		minify: "terser",
	},
	css: {
		preprocessorOptions: {
			sass: {
				additionalData: "$isDev: false\n",
			},
		},
		postcss: {
			plugins: [autoprefixer, sortMediaQueries, cssnanoPlugin, postcssShort],
		},
	},
	plugins: [
		pug({
			buildOptions: { basedir: path.srcFolder },
		}),
		commonjs(),
		babel({ babelHelpers: "bundled" }),
		stylelint({
			include: [`${path.src.styles}/**/*.sass`],
			fix: true,
			lintInWorker: true,
			lintOnStart: true,
			chokidar: true,
		}),
	],
})
