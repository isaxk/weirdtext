<script lang="ts">
	import { inputtedText } from "$lib/stores";
	import { textModifiers } from "$lib/textmodifiers";
	import MaterialIcon from "./MaterialIcon.svelte";

	import Clipboard from "svelte-clipboard";

	export let data: { name: string; textFunction: Function; css: string };

	let outputText: string;

	$: if ($inputtedText === "") {
		outputText = data.textFunction("This is an example");
	} else {
		outputText = data.textFunction($inputtedText);
	}
</script>

<div class="output-box">
	<div class="left">
		<div class="name">{data.name}</div>
		<div class="output-text-container">
			<div class="output-text" style={data.css}>
				{outputText}
			</div>
		</div>
	</div>
	<div class="right">
		<div class="copy-button">
			<Clipboard
				text={outputText}
				let:copy
				on:copy={() => {
					console.log("Has Copied");
				}}
			>
				<button on:click={copy}>
					<MaterialIcon icon="content_copy" />
				</button>
			</Clipboard>
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
		gap: 20px;
	}
	.right {
		display: grid;
		align-items: center;
	}
	.left {
		display: grid;
		grid-template-rows: max-content 1fr;
		align-items: center;
	}
	.name {
		font-weight: 700;
	}
	.output-text {
		padding: 10px 0px;
		font-size: 20px;
		font-family: "Noto Sans", sans-serif;
		align-content: center;
	}
	.copy-button {
		display: grid;
		place-items: center;
	}
	button {
		background-color: transparent;
		border: none;
		color: var(--text-color);
		padding: 10px;
		border-radius: 5px;
		margin: 0px;
		transition: .3s;
		outline-color: grey;
	}
	button:hover {
		background-color: #525252;
		color: white;
	}
	button:focus{
		outline: 5px solid #525252;
		color: white;
		border: 5px;
		transition: .1s;
	}
</style>
