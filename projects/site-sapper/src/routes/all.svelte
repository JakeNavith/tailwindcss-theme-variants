<script>
	// @ts-nocheck
	
	import Metadata from "../components/Metadata.svelte";

	import SiteAll from "../rendered-content/site-all.svx";
	import SiteTOC from "../rendered-content/site-toc.svx";

	import { onMount } from "svelte";
	onMount(async () => {
		// https://github.com/sveltejs/sapper/issues/904#issuecomment-540536561
		document.querySelectorAll("a").forEach((a) => {
			if (a.origin === window.location.origin) {
				if (a.href.endsWith("/")) return;

				// https://github.com/sveltejs/sapper/issues/904#issuecomment-591088898
				a.href = window.location.origin + window.location.pathname + a.hash;
			}
        });
	});
</script>

<Metadata />

<div class="flex flex-1 flex-shrink-0 overflow-y-hidden">
	<!-- Left sidebar for navigation -->
	<aside class="hidden max-w-xs overflow-y-auto xl:max-w-md 3xl:max-w-xl lg:block">
		<nav class="p-10 sidebar">
			<SiteTOC />
		</nav>
	</aside>
	<!-- End left sidebar for navigation -->

	<!-- Main page content -->
	<div class="flex-1 overflow-y-auto">
		<div class="flex justify-center p-5 lg:p-10">
			<article class="prose-sm prose md:prose 3xl:prose-lg">
				<SiteAll />
			</article>
		</div>
	</div>
	<!-- End main page content -->
</div>
