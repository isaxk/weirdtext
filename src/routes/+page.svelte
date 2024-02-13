<script lang="ts">
	import TextBox from "$lib/components/TextBox.svelte";
	import TextOutput from "$lib/components/TextOutput.svelte";

	import { textModifiers } from "$lib/textmodifiers";
</script>

<svelte:head>
	<title>WeirdText</title>
</svelte:head>

<TextBox />

<div class="outputs">
	{#each textModifiers as modifier}
		<TextOutput data={modifier} />
	{/each}
</div>

<style>
	.outputs {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 10px;
		padding: 50px 0px;
	}
</style>
