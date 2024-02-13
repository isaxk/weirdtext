<script lang="ts">
	import "$lib/css/app.css";

	import Header from "$lib/components/Header.svelte";
</script>

<Header />

<main>
	<slot />
</main>


<style>
    main {
        width: 1150px;
        max-width: 100%;
        padding: 100px 20px;
        box-sizing: border-box;
        margin: auto;
    }
</style>