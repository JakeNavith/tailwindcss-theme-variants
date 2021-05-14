<script>
	// @ts-nocheck -- incompatibility with mdsvex?
	import Icon from "@iconify/svelte";
	
	export let layout = "";
	if (layout) {}

	export let icon;
	export let cardColor;
	export let titleColor;
	export let iconColor;
	export let iconBackgroundColor;
	export let bodyColor;
	export let dividerColor;
</script>

<style>
	.body :global(p) + :global(p) {
		@apply mt-4;	
	}
</style>

<div class="lg:max-w-lg min-w-sm xl:min-w-md p-5 rounded-2.5xl flex-1 {cardColor} transition-theme flex items-begin">
	<span class="inline-flex items-center justify-center w-10 h-10 flex-shrink-0 rounded-full {iconColor} transition-theme {iconBackgroundColor}">
		<Icon {icon} aria-hidden="true" class="w-6 h-6" />
	</span>
	
	<div class="pl-5 flex flex-col pr-4">
		<div class="flex items-center justify-between">
			<span class="text-3xl font-medium font-heading tracking-snug leading-tighter {titleColor} transition-theme table pb-1 border-b-2 {dividerColor}">
				<slot name="title">Title</slot>
			</span>
		</div>

		<div class="mt-4 pb-2 flex flex-1 items-center leading-relaxed {bodyColor} body transition-theme">
			<slot name="body">Body</slot>
			{#if ("a" || "b") === "a"}<slot />{/if}
		</div>
	</div>
</div>
