<script>
	import Icon from "@iconify/svelte";
    
    import colorSwatch from "@iconify-icons/heroicons-solid/color-swatch";
	import moon from "@iconify-icons/heroicons-solid/moon";
    import sun from "@iconify-icons/heroicons-solid/sun";
    
	import github from "@iconify-icons/mdi/github";
	import npm from "@iconify-icons/mdi/npm-variant";

    import type { Writable } from "svelte/store";

	const themeIcons = {
		light: sun,
		dark: moon,
		system: colorSwatch,
    };
    
    type Link = [typeof github, string, string];
    const links: Link[] = [
        [github, "GitHub", "https://github.com/JakeNavith/tailwindcss-theme-variants"],
        [npm, "npm", "https://www.npmjs.com/package/tailwindcss-theme-variants"]
    ];

    export let theme: Writable<string | undefined>;
    export let themeOptions: (keyof typeof themeIcons)[];
</script>


<header class="z-20 flex flex-row items-baseline justify-between transition-theme light-theme:bg-white dark-theme:bg-gray-800 light-theme:shadow-lg-faint dark-theme:shadow-lg">
    <!-- Homepage link -->
    <div class="p-5 lg:pl-10">
        <a href="/" class="text-lg sm:text-xl font-medium hocus:underline"><span class="sr-only">Tailwind CSS </span><span class="font-heading font-normal">theme variants</span></a>
    </div>
    <!-- End homepage link -->
    
    <!-- Theme selection -->
    <div class="px-5 text-on-primary-faint-100" role="radiogroup" aria-labelledby="theme-label">
        {#if themeOptions.length > 0}
            <span id="theme-label" class="sr-only md:not-sr-only">Theme:</span>
        {/if}
        {#each themeOptions as themeOption}
            <button role="radio" class="px-2 py-2 sm:py-5 group focus:outline-none" aria-checked={$theme === themeOption} on:click={() => $theme = themeOption} title="Use the {themeOption} theme on this site">
                <div class="p-1 -m-1 rounded transition-theme {$theme === themeOption ? 'font-semibold bg-primary-faint-200' : 'group-hocus:bg-primary-faint-200'}">
                    <Icon icon={themeIcons[themeOption]} aria-hidden="true" style="font-size: 125%" class="inline align-middle transition-theme {$theme === themeOption ? '' : 'text-on-primary-faint-300 group-hocus:text-on-primary'}" /><span class="lg:pl-1 sr-only lg:not-sr-only">{themeOption.slice(0, 1).toUpperCase() + themeOption.slice(1)}</span>
                </div>
            </button>
        {/each}
    </div>
    <!-- End theme selection -->

    <!-- External links for the package -->
    <div class="pr-5">
        {#each links as [icon, name, link]}
            <a title={name} class="py-2 pl-3 md:pl-4 pr-0 lg:p-5 lg:pr-5 group text-on-primary-faint-200 hocus:text-on-primary transition-theme" href={link}><Icon {icon} style="font-size: 125%" class="inline align-middle text-on-primary-faint-300 group-hocus:text-on-primary transition-theme" /><span class="md:pl-1 align-middle group-hocus:underline sr-only md:not-sr-only">{name}</span></a>
        {/each}
    </div>
    <!-- End external links for the package -->
</header>
