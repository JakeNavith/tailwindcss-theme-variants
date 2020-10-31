import { TailwindCSSConfig } from "@navith/tailwindcss-plugin-author-types";
import assert from "assert";
import { merge } from "lodash";
import postcss from "postcss";
import tailwindcss from "tailwindcss";

export const generatePluginCSS = (config: TailwindCSSConfig, css?: string): Promise<string> => postcss(
	tailwindcss(
		merge({
			theme: {},
			corePlugins: false,
			future: {
				defaultLineHeights: true,
				standardFontWeights: true,
				removeDeprecatedGapUtilities: true,
				purgeLayersByDefault: true,
			},
		} as TailwindCSSConfig, config),
	),
).process(css ?? "@tailwind utilities", {
	from: undefined,
}).then((result) => result.css);

// Source: jest-matcher-css
const strip = (str: string): string => str
	.replace(/^\s+/gm, "")
	.replace(/;/g, "")
	.replace(/,\s*/g, ", ")
	.replace(/:\s+/g, ":")
	.replace(/\s+{/g, "{")
	.replace(/}\s+/g, "}")
	.replace(/\n+/g, "\n");
const prettify = (str: string): string => str.replace(/}/g, "\n}").replace(/{/g, "{\n");
const clean = (str: string): string => prettify(strip(str));

export const assertExactCSS = (actual: string, expected: string): void => {
	assert.strictEqual(clean(actual), clean(expected));
};

export const assertContainsCSS = (superString: string, expectedToContain: string[]): void => {
	const superClean = clean(superString);
	expectedToContain.forEach((contain) => {
		const containClean = clean(contain);
		assert.ok(superClean.includes(containClean), `expected ${superString} to contain ${contain}`);
	});
};

export const onTailwind2 = (warnings: { args: string[] }[]): boolean => warnings.some((warning) => warning.args.some((arg) => arg.includes("The `target` feature has been removed in Tailwind CSS v2.0.")));
