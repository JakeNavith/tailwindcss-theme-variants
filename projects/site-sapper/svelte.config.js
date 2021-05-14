const { mdsvex } = require("mdsvex");
const link = require("rehype-autolink-headings");
const slug = require("rehype-slug");
const externalLinks = require("remark-external-links");
const github = require("remark-github");
const sveltePreprocess = require("svelte-preprocess");
const postcss = require("./postcss.config");

const extensions = [".svx"];

const createPreprocessors = ({ sourceMap }) => [
	sveltePreprocess({
		sourceMap,
		defaults: {
			script: "typescript",
			style: "postcss",
		},
		postcss,
	}),
	mdsvex({
		extensions,
		layout: {
			_: "./src/layouts/transparent.svelte",
			"brag-about": "./src/layouts/brag-about.svelte",
		},
		remarkPlugins: [
			github,
			[externalLinks, {
				content: {
					type: "text",
					value: " (opens in a new window)",
				},
				contentProperties: {
					class: "sr-only",
				},
			}],
		],
		rehypePlugins: [
			slug,
			[link, {
				behavior: "wrap",
			}],
		],
		smartypants: true,
	}),
];

module.exports = {
	createPreprocessors,
	extensions,
	// Options for `svelte-check` and the VS Code extension
	preprocess: createPreprocessors({ sourceMap: true }),
};
