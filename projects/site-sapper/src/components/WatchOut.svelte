<script>
    import Icon from "@iconify/svelte";
    
	import exclamation from "@iconify-icons/heroicons-solid/exclamation";
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

<div class="flex flex-1 p-5 my-10 rounded-2xl bg-warning-bg transition-theme">
	<span class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full text-warning-icon transition-theme bg-warning-icon-bg">
		<Icon icon={exclamation} aria-hidden="true" class="w-5 h-5" />
	</span>
	<div class="pl-4 self-center text-warning-body body transition-theme">
		<strong>Be careful: </strong><slot />
	</div>
</div>
