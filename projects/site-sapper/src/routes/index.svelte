<script>
	// @ts-nocheck
	import Icon from "@iconify/svelte";

	import chevronRight from "@iconify-icons/heroicons-solid/chevron-right";

	import BrowserSupport from "./_brag-about/browser-support.svx";
	import UtilitySupport from "./_brag-about/utility-support.svx";
	import DesignSystem from "./_brag-about/design-system.svx";
	import UnlimitedThemes from "./_brag-about/unlimited-themes.svx";
	import MeaningfulClasses from "./_brag-about/meaningful-classes.svx";
	import StackedVariants from "./_brag-about/stacked-variants.svx";

	const order = [
		BrowserSupport,
		UtilitySupport,
		DesignSystem,
		UnlimitedThemes,
		MeaningfulClasses,
		StackedVariants,
	];
</script>

<main class="flex-1 overflow-y-auto">
	<section class="px-5 py-12 lg:py-16 xl:py-32 md:px-15">
		<h1 class="text-center text-on-primary transition-theme">
			<strong class="text-5xl font-normal leading-relaxed font-heading">theme variants</strong>
			<br class="block lg:hidden" />
			<span class="font-medium text-4xl lg:text-5xl md:pl-2 lg:font-normal">for Tailwind CSS</span>
		</h1>
		
		<p class="pt-10 lg:pt-6 text-xl leading-loose text-center">
			<code class="text-lg">tailwindcss-theme-variants</code> is a <strong class="font-semibold">powerful</strong><br class="hidden sm:block lg:hidden" /> <strong class="font-semibold">theming plugin</strong> for Tailwind CSS: 
		</p>
	</section>

	<div class="flex justify-center">
		<section class="flex flex-wrap max-w-screen-3xl md:px-5">
			{#each order as Point}
				<div class="flex justify-center flex-1 p-5">
					<Point />
				</div>
			{/each}
		</section>
	</div>

	<section class="pt-16 pb-32">
		<div class="pb-6 text-center">
			<span class="text-4xl font-heading font-normal tracking-snug">Convinced?</span>
		</div>
		<!-- 
			
		Read the quick start guide

		-->
		<div class="flex justify-center px-5 text-center md:px-15">
			<!-- Alternatively, -->
			<a href="/all#installation" class="inline-block p-5 py-4 pr-2 text-2xl font-semibold text-white transition duration-200 ease-out transform bg-gradient-45deg light-theme:from-indigo-600 light-theme:bg-blue-500 dark-theme:from-indigo-800 dark-theme:bg-blue-600 rounded-2xl hocus:scale-105 light-theme:shadow-xl-blue light-theme:hocus:shadow-2xl-blue dark-theme:shadow-xl dark-theme:hocus:shadow-2xl">Read all the documentation on a single page <Icon class="inline -ml-1.5" style="font-size: 125%" icon={chevronRight} /></a>
		</div>
	</section>
</main>
