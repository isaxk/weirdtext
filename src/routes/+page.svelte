<script lang="ts">
	import TextBox from "$lib/components/TextBox.svelte";
	import TextOutput from "$lib/components/TextOutput.svelte";

	import { textModifiers } from "$lib/textmodifiers";
</script>

<TextBox />

<div class="outputs">
	{#each textModifiers as modifier}
		<TextOutput data={modifier} />
	{/each}
</div>

<style>
	.outputs {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 10px;
		padding: 50px 0px;
	}
</style>
