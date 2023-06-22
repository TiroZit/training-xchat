import { readdirSync, statSync, lstatSync, existsSync } from 'node:fs';
import path from "path";

const getAllFiles = function(dirPath, arrayOfFiles) {
	const files = readdirSync(dirPath);
	arrayOfFiles = arrayOfFiles || [];

	files.forEach((file) => {
		if (statSync(dirPath + "/" + file).isDirectory()) {
			arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
		} else {
			arrayOfFiles.push(file)
		}
	})

	return arrayOfFiles
}

const searchDirectory = (dir, ext, excludeDir) => {
	const files = readdirSync(dir)
	let result = []

	files.forEach(file => {
		const filePath = path.join(dir, file)
		const fileStat = statSync(filePath)

		if (fileStat.isDirectory() && file !== excludeDir) {
			result = result.concat(searchDirectory(filePath, ext, excludeDir))
		}
		else if (fileStat.isFile()) {
			result.push(filePath)
		}
	})

	return result
}

function fromDir(startPath, filter, arrayOfFiles) {
	arrayOfFiles = arrayOfFiles || [];

	if (!existsSync(startPath)) {
		console.log("no dir ", startPath);
		return;
	}

	let files = readdirSync(startPath);
	for (let i = 0; i < files.length; i++) {
		let filename = path.join(startPath, files[i]);
		let stat = lstatSync(filename);
		if (stat.isDirectory()) {
			arrayOfFiles = fromDir(filename, filter, arrayOfFiles); //recurse
		} else if (filename.endsWith(filter)) {
			arrayOfFiles.push(filename)
		}
	}

	return arrayOfFiles;
}

export { getAllFiles, fromDir, searchDirectory }
