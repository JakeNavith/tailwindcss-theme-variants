<script>
	import "../app.postcss";

	import { browser } from "$app/env";
	import { localStorageStore } from "$lib/local-store";

	import Header from "./_Header.svelte";
	

	const theme = localStorageStore("theme", browser ? "system" : undefined);

	let themeOptions = [];
	if (browser) {
		themeOptions = ["light", "dark"]
		if (matchMedia("(prefers-color-scheme: light)").matches || matchMedia("(prefers-color-scheme: dark)").matches) themeOptions = [...themeOptions, "system"];
	}

	$: if (browser) {
		if ($theme === "system") document.documentElement.removeAttribute("data-theme");
		else document.documentElement.setAttribute("data-theme", $theme);
	}
</script>

<div class="flex flex-col h-screen overflow-y-hidden">
	<Header {theme} {themeOptions} />
	<slot />
</div>

<slot />
