import { renameSync, rmSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from "node:path";
import { fileURLToPath } from 'url';
import { path } from "./gulp-settings.js"

const oldFiles = ["../scripts/index.js", "../scripts/vendor.js", "../styles/main.css"]
const scriptIndexFile = `${path.build.scripts}/index.js`;
const scriptVendorFile = `${path.build.scripts}/vendor.js`;
const styleFile = `${path.build.styles}/main.css`;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const scriptsDir = join(__dirname, '..', 'scripts');
// const stylesDir = join(__dirname, '..', 'styles');

// // Создаем папку scripts, если ее нет
// if (existsSync(scriptsDir)) {
//   mkdirSync(scriptsDir);
// }
// if (existsSync(stylesDir)) {
//   mkdirSync(stylesDir);
// }

oldFiles.forEach(file => {
	if (file) {
		try {
			rmSync(file)
			console.log(`[moveFiles] Файл ${file} удален`);
		} catch (error) {
			console.log(`[moveFiles] ${error}`);
		}
	}
});

renameSync(scriptIndexFile, join("../scripts", 'index.js'));
renameSync(scriptVendorFile, join("../scripts", 'vendor.js'));
renameSync(styleFile, join("../styles", 'main.css'));
