<script>
	const siteName = "Theme Variants";
	const siteAuthor = "Navith";
	const siteDomain = "https://tailwindcss-theme-variants.web.app";

	export let pageTitle: string | undefined = undefined;
	export let title = pageTitle === undefined ? siteName : `${pageTitle} - ${siteName}`;

	export let description: string = "Media-query- or JavaScript-based theme variants with fallback for Tailwind CSS";

	export let author = siteAuthor;

	export let route = "/";

	$: url = `${siteDomain}${route}`;

	export let image = `${siteDomain}/social-1200.png`;
	export let imageAlt = `The text "theme variants" above the paragraph "${description}"`;

	let metaTagsProperty: {
		[property: string]: string;
	};
	$: metaTagsProperty = {
		"author": author,

		"og:url": url,
		"og:type": "website",
		"og:title": title,
		"og:image": image,
		"og:image:alt": imageAlt,
		...(description ? {
			"og:description": description,
		} : {}),
		"og:site_name": siteName,
		"og:locale": "en_US",
	};

	let metaTagsName: {
		[name: string]: string;
	};
	$: metaTagsName = {
		"twitter:card": "summary_large_image",
		"twitter:url": url,
		"twitter:title": title,
		...(description ? {
			"twitter:description": description,
		} : {}),
		"twitter:image": image,
		"twitter:image:alt": imageAlt,
	}
</script>

<svelte:head>
	<title>{title}</title>

	{#each Object.entries(metaTagsProperty) as [property, content]}
		<meta {property} {content} />
	{/each}

	{#each Object.entries(metaTagsName) as [name, content]}
		<meta {name} {content} />
	{/each}
</svelte:head>
