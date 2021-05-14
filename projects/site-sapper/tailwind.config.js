/*
	Tailwind - The Utility-First CSS Framework
	A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
	David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).
	View the full documentation at https://tailwindcss.com.
*/

const d3 = require("d3-color");
const { themeVariants, prefersDark, prefersLight } = require("tailwindcss-theme-variants");
const typography = require("@tailwindcss/typography");

const defaultTheme = require("tailwindcss/defaultTheme");

const redesignedColorPalette = require("tailwindcss/colors");
const proseStyles = require("./prose-styles");

const lch = (l, c, h) => d3.lch(l, c, h).formatHex();

/** @type{import("@navith/tailwindcss-plugin-author-types").TailwindCSSConfig} */
const tailwindcssConfig = {
	mode: "aot",
	purge: {
		content: ["./src/**/*.svelte", "./src/routes/**/*.svx", "./src/**/*.html"],
		options: {
			defaultExtractor: (content) => [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
			keyframes: true,
			safelist: ["data-theme"],
		},
	},
	theme: {
		colors: {
			white: lch(100, 0, 0),
			black: lch(0, 0, 0),

			gray: redesignedColorPalette.coolGray,
			red: redesignedColorPalette.red,
			orange: redesignedColorPalette.orange,
			amber: redesignedColorPalette.amber,
			yellow: redesignedColorPalette.yellow,
			lime: redesignedColorPalette.lime,
			green: redesignedColorPalette.green,
			cyan: redesignedColorPalette.cyan,
			"light-blue": redesignedColorPalette.lightBlue,
			blue: redesignedColorPalette.blue,
			indigo: redesignedColorPalette.indigo,
			purple: redesignedColorPalette.fuchsia,

			"code-yellow": {
				200: lch(92, 63.324 + 5, 97.837),
				800: lch(31 + 3, 39.878 + 70, 58.146 + 27),
			},
			"code-green": {
				300: lch(83 - 2.5, 37.279 + 35, 165.238 - 20),
				800: lch(31, 28.507 + 75, 167.587 - 5),
			},
			"code-teal": {
				300: lch(82, 28.809 + 50, 203.877 - 15),
				800: lch(31 - 2.5, 20.456 + 80, 219.205 - 23),
			},
			"code-blue": {
				300: lch(80 + 1, 29.564 + 70, 269.349 + 15),
				800: lch(31 + 3, 58.694 + 26, 292.926),
			},
			"code-purple": {
				300: lch(80, 33.365 + 60, 299.190 + 10),
				800: lch(30, 88.129 + 5, 309.133 + 17),
			},
		},

		extend: {
			backgroundImage: {
				"gradient-45deg": "linear-gradient(45deg, var(--tw-gradient-stops))",
			},

			borderRadius: {
				"2.5xl": "1.25rem",
			},

			boxShadow: {
				"lg-faint": "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
				"xl-blue": "0 15px 30px -5px rgba(59, 130, 246, 0.2), 0 10px 25px -5px rgba(96, 165, 250, 0.6)",
				"2xl-blue": "0 18px 40px -12px rgba(59, 130, 246, 0.4), 0 13px 27px -5px rgba(96, 165, 250, 0.8)",
			},

			fontFamily: {
				heading: ["Syne", ...defaultTheme.fontFamily.sans],
			},

			letterSpacing: {
				snug: "-0.0125em",
			},

			minWidth: (theme) => ({
				...theme("maxWidth"),
			}),

			typography: proseStyles.typography,
		},

		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1920px",
		},
	},

	variants: {
		extend: {
			backgroundColor: ["group-hocus", "hocus", "themes"],
			borderColor: ["themes"],
			boxShadow: ["hocus", "themes", "themes:hocus"],
			gradientColorStops: ["themes"],
			scale: ["hocus"],
			textDecoration: ["group-hocus", "hocus"],
			textColor: ["group-hocus", "hocus", "themes"],
		},
	},

	plugins: [
		themeVariants({
			group: "themes",
			baseSelector: "html",
			fallback: "compact",
			themes: {
				"light-theme": {
					selector: "[data-theme=light]",
					mediaQuery: prefersLight,
					semantics: {
						colors: {
							accent: {
								faint: {
									600: "blue-100",
									500: "blue-200",
								},
								default: "blue-700",
								strong: {
									100: "blue-800",
									200: "blue-900",
								},
							},

							primary: {
								faint: {
									200: "gray-200",
									100: "gray-100",
								},
								default: "white",
							},

							"on-primary": {
								faint: {
									500: "gray-300",
									400: "gray-400",
									300: "gray-500",
									200: "gray-600",
									100: "gray-700",
								},
								default: "gray-800",
							},

							idea: {
								bg: "yellow-100",
								icon: "yellow-800",
								"icon-bg": "yellow-300",
								body: "yellow-900",
							},

							warning: {
								bg: "orange-100",
								icon: "orange-800",
								"icon-bg": "orange-300",
								heading: "orange-800",
								body: "orange-900",
							},

							"brag-about-red": {
								bg: "red-100",
								icon: "red-800",
								"icon-bg": "red-300",
								heading: "red-800",
								body: "red-900",
							},

							"brag-about-yellow": {
								bg: "amber-100",
								icon: "amber-800",
								"icon-bg": "amber-300",
								heading: "amber-800",
								body: "amber-900",
							},

							"brag-about-green": {
								bg: "lime-100",
								icon: "lime-800",
								"icon-bg": "lime-300",
								heading: "lime-800",
								body: "lime-900",
							},

							"brag-about-cyan": {
								bg: "cyan-100",
								icon: "cyan-800",
								"icon-bg": "cyan-300",
								heading: "cyan-800",
								body: "cyan-900",
							},

							"brag-about-blue": {
								bg: "blue-100",
								icon: "blue-800",
								"icon-bg": "blue-300",
								heading: "blue-800",
								body: "blue-900",
							},

							"brag-about-purple": {
								bg: "purple-100",
								icon: "purple-800",
								"icon-bg": "purple-300",
								heading: "purple-800",
								body: "purple-900",
							},
						},
					},
				},

				"dark-theme": {
					selector: "[data-theme=dark]",
					mediaQuery: prefersDark,
					semantics: {
						colors: {
							accent: {
								faint: {
									600: "blue-900",
									500: "blue-800",
								},
								default: "blue-400",
								strong: {
									100: "blue-200",
									200: "blue-100",
								},
							},

							primary: {
								faint: {
									200: "gray-700",
									100: "gray-800",
								},
								default: "gray-900",
							},

							"on-primary": {
								faint: {
									500: "gray-600",
									400: "gray-500",
									300: "gray-400",
									200: "gray-300",
									100: "gray-200",
								},
								default: "gray-100",
							},

							idea: {
								bg: "yellow-800",
								icon: "white",
								"icon-bg": "yellow-500",
								body: "white",
							},

							warning: {
								bg: "orange-800",
								icon: "white",
								"icon-bg": "orange-500",
								heading: "white",
								body: "white",
							},

							"brag-about-red": {
								bg: "red-800",
								icon: "white",
								"icon-bg": "red-500",
								heading: "white",
								body: "red-50",
							},

							"brag-about-yellow": {
								bg: "yellow-700",
								icon: "white",
								"icon-bg": "yellow-500",
								heading: "white",
								body: "white",
							},

							"brag-about-green": {
								bg: "green-800",
								icon: "white",
								"icon-bg": "green-600",
								heading: "white",
								body: "green-50",
							},

							"brag-about-cyan": {
								bg: "light-blue-800",
								icon: "white",
								"icon-bg": "light-blue-500",
								heading: "white",
								body: "light-blue-50",
							},

							"brag-about-blue": {
								bg: "blue-800",
								icon: "white",
								"icon-bg": "blue-600",
								heading: "white",
								body: "blue-50",
							},

							"brag-about-purple": {
								bg: "purple-800",
								icon: "white",
								"icon-bg": "purple-500",
								heading: "white",
								body: "purple-50",
							},
						},
					},
				},
			},
			variants: {
				hocus: (selector) => `${selector}:hover, ${selector}:focus`,
			},
		}),

		typography,

		({ addVariant, e }) => {
			addVariant("hocus", ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					const utilityClass = e(`hocus${separator}${className}`);
					return `.${utilityClass}:hover, .${utilityClass}:focus`;
				});
			});
			addVariant("group-hocus", ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => {
					const utilityClass = e(`group-hocus${separator}${className}`);
					return `.group:hover .${utilityClass}, .group:focus .${utilityClass}`;
				});
			});
		},
	],
};

module.exports = tailwindcssConfig;
