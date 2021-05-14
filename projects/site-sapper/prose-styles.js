const typographyStyles = require("@tailwindcss/typography/src/styles");

module.exports = {
	typography: (theme) => ({
		DEFAULT: {
			css: {
				color: false,
				"@apply text-on-primary": "",
				"@apply transition-theme": "",
				width: "72ch",
				maxWidth: "100%",
				lineHeight: "2",

				"[class~=\"lead\"]": false,

				a: {
					color: false,
					textDecoration: false,
					"@apply text-accent": "",
					"@apply transition-theme": "",
				},
				"a:hover, a:focus": {
					textDecoration: "underline",
					"@apply text-accent-strong-100": "",
				},

				// Begin code styles
				code: {
					color: "inherit",
					fontWeight: false,
					"@apply bg-primary-faint-100": "",
					"@apply transition-theme": "",
					"@apply p-1 -m-0.5 rounded": "",
					boxDecorationBreak: "clone",
				},
				"code::before": {
					content: false,
				},
				"code::after": {
					content: false,
				},
				"code a, a code": {
					"@apply text-accent-strong-100 bg-accent-faint-600": "",
				},
				"a:hover code, a:focus code": {
					"@apply text-accent-strong-200 bg-accent-faint-500": "",
				},
				"pre code, table code": {
					backgroundColor: "transparent !important",
				},
				// End code styles

				h1: {
					color: false,

					marginTop: typographyStyles(theme).DEFAULT.css[1].h2.marginTop,
					marginBottom: typographyStyles(theme).DEFAULT.css[1].h1.marginTop,

					fontWeight: false,
				},
				h2: {
					color: false,

					marginTop: typographyStyles(theme).DEFAULT.css[1].h1.marginBottom,

					fontWeight: false,
				},
				h3: {
					color: false,
				},
				h4: {
					color: false,
				},

				"h1, h2, h3, h4": {
					"@apply font-heading": "",
					"@apply font-medium tracking-snug": "",
				},

				"h1 a, h2 a, h3 a, h4 a": {
					"@apply text-on-primary": "",
					"@apply transition-theme": "",
				},

				// Begin list styles
				li: {
					marginTop: "0.25em",
					marginBottom: "0.25em",
				},
				"ul > li > :first-child": {
					marginTop: false,
				},
				"ul > li > :last-child": {
					marginBottom: false,
				},
				"ul > li::before": {
					backgroundColor: false,
					"@apply bg-on-primary-faint-500": "",
					"@apply transition-theme": "",
					top: "0.875em",
				},
				"ol > li::before": {
					backgroundColor: false,
					"@apply text-on-primary-faint-200": "",
					"@apply transition-theme": "",
				},
				// End list styles

				strong: {
					color: false,
					"@apply transition-theme": "",
				},

				// Begin table styles
				table: {
					"@apply block": "",
					maxHeight: "calc(40vh + 10rem)",
					"@apply overflow-x-auto overflow-y-auto": "",
					"@apply rounded-md": "",
				},

				thead: {
					borderBottomWidth: false,
					color: false,
				},

				"thead:first-child tr:first-child th:first-child, tbody:first-child tr:first-child th:first-child, tbody:first-child tr:first-child td:first-child": {
					"@apply rounded-tl-md": "",
				},
				"thead:first-child tr:first-child th:last-child, tbody:first-child tr:first-child th:last-child, tbody:first-child tr:first-child td:last-child": {
					"@apply rounded-tr-md": "",
				},
				"thead:last-child tr:last-child th:last-child, tbody:last-child tr:last-child th:last-child, tbody:last-child tr:last-child td:last-child": {
					"@apply rounded-br-md": "",
				},
				"thead:last-child tr:last-child th:first-child, tbody:last-child tr:last-child th:first-child, tbody:last-child tr:last-child td:first-child": {
					"@apply rounded-bl-md": "",
				},

				"thead th": {
					paddingRight: false,
					paddingBottom: false,
					paddingLeft: false,
				},

				"tbody tr": {
					borderBottomWidth: false,
				},

				"thead th:first-child:empty": {
					"@apply z-10": "",
				},

				"tbody th:first-child, thead th": {
					"@apply sticky top-0 left-0": "",
					"@apply bg-primary-faint-100": "",
				},

				"thead th:first-child": {
					paddingLeft: false,
				},
				"thead th:last-child": {
					paddingRight: false,
				},

				"tbody td:first-child": {
					paddingLeft: false,
				},
				"tbody td:last-child": {
					paddingRight: false,
				},

				th: {
					"@apply font-semibold": "",
				},

				"th, td": {
					"@apply p-2": "",
					"@apply bg-primary-faint-100": "",
					"@apply transition-theme": "",
				},

				"tbody tr:nth-child(odd) th, tbody tr:nth-child(odd) td": {
					"@apply bg-primary-faint-200": "",
				},
				// End table styles
			},
		},

		sm: {
			css: {
				lineHeight: "2.5",

				"[class~=\"lead\"]": false,

				// Begin heading styles
				h1: {
					marginTop: typographyStyles(theme).sm.css[0].h2.marginTop,
					marginBottom: typographyStyles(theme).sm.css[0].h1.marginTop,
				},
				h2: {
					marginTop: typographyStyles(theme).sm.css[0].h1.marginBottom,
				},
				// End heading styles

				// Begin list styles
				"ul > li::before": {
					top: "1em",
				},
				// End list styles

				// Begin table styles
				"thead th": {
					paddingRight: false,
					paddingBottom: false,
					paddingLeft: false,
				},
				"thead th:first-child": {
					paddingLeft: false,
				},
				"thead th:last-child": {
					paddingRight: false,
				},

				"tbody td:first-child": {
					paddingLeft: false,
				},
				"tbody td:last-child": {
					paddingRight: false,
				},
				// End table styles
			},
		},

		lg: {
			css: {
				// Begin table styles
				table: {
					maxHeight: "calc(80vh - 8rem)",
				},

				"th, td": {
					"@apply p-4": "",
				},

				"thead th": {
					paddingRight: false,
					paddingBottom: false,
					paddingLeft: false,
				},
				"thead th:first-child": {
					paddingLeft: false,
				},
				"thead th:last-child": {
					paddingRight: false,
				},
				"tbody td": {
					paddingTop: false,
					paddingRight: false,
					paddingBottom: false,
					paddingLeft: false,
				},
				"tbody td:first-child": {
					paddingLeft: false,
				},
				"tbody td:last-child": {
					paddingRight: false,
				},
				// End table styles
			},
		},
	}),
};
