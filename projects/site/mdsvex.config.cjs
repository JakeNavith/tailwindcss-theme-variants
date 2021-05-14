/* eslint-disable @typescript-eslint/no-var-requires */
const link = require("rehype-autolink-headings");
const slug = require("rehype-slug");
const externalLinks = require("remark-external-links");
const github = require("remark-github");

module.exports = {
	extensions: [".svx", ".svelte.md", ".md"],
	layout: {
		_: "./src/layouts/transparent.svelte",
		"brag-about": "./src/layouts/brag-about.svelte",
	},
	remarkPlugins: [
		[github, {
			repository: "https://github.com/JakeNavith/tailwindcss-theme-variants.git",
		}],
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
};
