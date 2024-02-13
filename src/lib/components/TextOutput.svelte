<script lang="ts">
	import { inputtedText } from "$lib/stores";
    import { textModifiers } from "$lib/textmodifiers";
	import MaterialIcon from "./MaterialIcon.svelte";


	export let data: { name: string, textFunction:Function };

	let outputText: string;

	$: if ($inputtedText === "") {
		outputText = data.textFunction("This is what this will look like");
	} else {
		outputText = data.textFunction($inputtedText);
	}
</script>

<div class="output-box">
    <div class="left">
        <div class="name">{data.name}</div>
        <div class="output-text-container">
            <div class="output-text">
                {outputText}
            </div>
        </div>
    </div>
	<div class="right">
        <div class="copy-button">
            <MaterialIcon icon="content_copy" />
        </div>
    </div>
</div>

<style>
	.output-box {
		background-color: var(--header-background-color);
		height: 100px;
		border-radius: 5px;
		padding: 20px 20px 30px 20px;
		font-size: 17px;
        display: grid;
        grid-template-columns: 1fr max-content;
		gap: 10px;

	}
    .right {
        display: grid;
        align-items: center;
    }
    .left {
        display: grid;
		grid-template-rows: max-content 1fr;
		align-items: center;
        overflow-y: scroll;
    }
	.name {
		font-weight: 600;
	}
	.output-text {
		padding: 10px 0px;
		font-size: 20px;
		font-weight: 400;
		font-family: var(--text-font-family);
        align-content: center;
	}
    .copy-button {
        display: grid;
        place-items: center;
    }
</style>
