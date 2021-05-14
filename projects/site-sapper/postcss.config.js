const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const postcssNested = require("postcss-nested");
const tailwindcss = require("tailwindcss");
const tailwindcssConfig = require("./tailwind.config");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		postcssImport,
		postcssNested({
			bubble: ["screen"],
		}),

		tailwindcss(tailwindcssConfig),

		!dev && cssnano({
			preset: [
				"default",
				{ discardComments: { removeAll: true } },
			],
		}),
	].filter(Boolean),
};
