<script>
	import Icon from "@iconify/svelte";
    
	import check from "@iconify-icons/heroicons-solid/check";
	import x from "@iconify-icons/heroicons-solid/x";

	export let type;

	const iconMap = {
		"yes": check,
		"kinda": undefined,
		"no": x,
	};

	$: icon = iconMap[type];
</script>

<div class="inline-flex items-center justify-center w-5 h-5 align-text-bottom transition-theme"
	 class:light-theme:bg-green-500={type === "yes"}
	 class:dark-theme:bg-green-600={type === "yes"}
	 class:light-theme:bg-yellow-400={type === "kinda"}
	 class:dark-theme:bg-yellow-500={type === "kinda"}
	 class:rounded={type === "yes"}
	 class:rounded-full={type === "kinda"}
	 class:light-theme:text-green-900={type === "yes"}
	 class:dark-theme:text-white={type === "yes"}
	 class:light-theme:text-red-600={type === "no"}
	 class:dark-theme:text-red-500={type === "no"}
	 title={type}
	>

	<span class="sr-only">{type}</span>

	{#if icon}
		<Icon {icon} aria-hidden="true" class="flex-shrink-0 {type === 'no' ? 'w-7 h-7' : 'w-5 h-5'}" />
	{/if}
</div>
