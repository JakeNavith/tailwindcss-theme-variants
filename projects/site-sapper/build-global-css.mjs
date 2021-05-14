import fs from "fs";
import postcss from "postcss";
// eslint-disable-next-line import/extensions
import postcssConfig from "./postcss.config.js";

const { readFile, unlink, writeFile } = fs.promises;

const main = async () => {
	let sourcemap = process.argv[process.argv.length - 1];
	if (sourcemap === "true") sourcemap = true;
	else if (sourcemap === "false") sourcemap = false;

	const pcss = await readFile("src/global.pcss");

	const result = await postcss(postcssConfig.plugins).process(pcss, { from: "src/global.pcss", to: "static/global.css", map: sourcemap ? { inline: sourcemap === "inline" } : false });

	await writeFile("static/global.css", result.css);

	if (result.map) await writeFile("static/global.css.map", result.map.toString());
	else {
		try {
			await unlink("static/global.css.map");
		} catch (err) {
			if (err.code !== "ENOENT") {
				throw err;
			}
		}
	}
};

main();
