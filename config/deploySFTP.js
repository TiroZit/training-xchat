import SftpClient from "ssh2-sftp-client"
import { resolve } from "path"
import { path, configFTP } from "./gulp-settings.js"

const deployFlag = process.argv[2]

function config(deployFlag) {
	const config = {
		connect: {
			host: configFTP[deployFlag].host,
			username: configFTP[deployFlag].user,
			password: configFTP[deployFlag].password,
		},
		outputPath: configFTP[deployFlag].serverPath,
	}

	return config
}

async function deploy() {
	const client = new SftpClient()
	const input = resolve(process.cwd(), path.buildFolder)
	const output = config(deployFlag).outputPath

	try {
		await client.connect(config(deployFlag).connect)
		client.on("upload", (info) => {
			console.log(`DeploySFTP: Uploaded ${info.source}`)
		})
		let rslt = await client.uploadDir(input, output)
		return rslt
	} catch (err) {
		console.error(err)
	} finally {
		client.end()
	}
}

deploy()
	.then((msg) => {
		console.log(msg)
	})
	.catch((err) => {
		console.log(`DeploySFTP error: ${err.message}`)
	})
