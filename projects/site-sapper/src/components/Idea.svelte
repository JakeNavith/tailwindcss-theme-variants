<script>
    import Icon from "@iconify/svelte";
    
	import lightBulb from "@iconify-icons/heroicons-solid/light-bulb";
</script>

<style>
	.body :global(p) {
		display: inline;	
	}

    .body :global(code) {
        color: inherit !important;
        background-color: transparent !important;
    }

    .body :global(a) {
        color: inherit !important;
        text-decoration: underline;
    }
</style>

<div class="flex flex-1 p-5 my-10 rounded-2xl bg-idea-bg transition-theme">
	<span class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full text-idea-icon transition-theme bg-idea-icon-bg">
		<Icon icon={lightBulb} aria-hidden="true" class="w-5 h-5" />
	</span>
	<div class="pl-4 self-center text-idea-body body transition-theme">
		<slot />
	</div>
</div>
