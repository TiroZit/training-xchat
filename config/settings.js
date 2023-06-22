import * as nodePath from 'path';

// Получаем имя папки проекта
const rootFolder = nodePath.basename(nodePath.resolve()),
	buildFolder = `./dist`,
	srcFolder = `./src`,
	assetsFolder = `${srcFolder}/assets`;

// Пути к папкам и файлам проекта
const path = {
	build: {
		html: `${buildFolder}`,
		scripts: `${buildFolder}/scripts`,
		styles: `${buildFolder}/styles`,
		images: `${buildFolder}/img`,
		fonts: `${buildFolder}/fonts`,
		files: `${buildFolder}/files`,
	},
	src: {
		views: `${srcFolder}/views`,
		templates: `${srcFolder}/templates`,
		scripts: `${srcFolder}/scripts`,
		styles: `${srcFolder}/styles`,
		images: `${assetsFolder}/img`,
		svgicons: `${assetsFolder}/svg-sprite/*.svg`,
	},
	assets: {
		images: `${assetsFolder}/img/**/*.*`,
		fonts: `${assetsFolder}/fonts`,
		svgicons: `${assetsFolder}/svg-sprite/*.svg`,
	},

	clean: buildFolder,
	buildFolder: buildFolder,
	rootFolder: rootFolder,
	srcFolder: srcFolder,
	assetsFolder: assetsFolder,
}

// Настройка FTP соединения
const configFTP = {
	html: {
		host: "html.xpager.ru",
		user: "file",
		password: "2T1g7E1i4523!2@16",
		serverPath: `/www/html.xpager.ru/${rootFolder}`,
	},
	server: {
		host: "", // Адрес FTP сервера
		user: "", // Имя пользователя
		password: "", // Пароль
		serverPath: "",
	},
}

export { path, configFTP };
