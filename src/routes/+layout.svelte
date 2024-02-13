<script lang="ts">
	import "$lib/css/app.css";

	import Header from "$lib/components/Header.svelte";
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="content">
		<div class="item">
			Project by <a href="https://www.isaxk.com">isaxk</a>
		</div>
		<div class="item">
			<a href="https://github.com/isaxk/weirdtext">View on Github</a>
		</div>
		<div class="item">
			Made with <a href="https://kit.svelte.dev">SvelteKit</a>
		</div>
	</div>
</footer>

<style>
	main {
		width: 1150px;
		max-width: 100%;
		padding: 100px 20px;
		box-sizing: border-box;
		margin: auto;
	}
	footer {
		padding: 50px 0px;
		display: flex;
		justify-items: center;
        align-items: center;
	}
	footer a {
		color: var(--text-color);
	}
	.content {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		place-items: center;
        text-align: center;
		padding: 0px 10px;
		gap: 20px 0px;
		width: 100%;
        max-width: 600px;
		box-sizing: border-box;
		font-size: 15px;
        margin: auto;
	}
</style>
