<script context="module">
	export const preload = () => {};
</script>

<script>
	import { localStore } from "local-store";

	import Header from "./_Header.svelte";
	

	const theme = localStore("theme", process.browser ? "system" : undefined);

	let themeOptions: ("light" | "dark" | "system")[] = [];
	if (process.browser) {
		themeOptions = ["light", "dark"]
		if (matchMedia("(prefers-color-scheme: light)").matches || matchMedia("(prefers-color-scheme: dark)").matches) themeOptions = [...themeOptions, "system"];
	}

	$: if (process.browser) {
		if ($theme === "system") document.documentElement.removeAttribute("data-theme");
		else document.documentElement.setAttribute("data-theme", $theme!);
	}

	export let segment: string = "";
	// Silence unused export property warning
	if (segment) {};
</script>



<div class="flex flex-col h-screen overflow-y-hidden">
	<Header {theme} {themeOptions} />
	<slot />
</div>
