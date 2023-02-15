<script>
    import "../lib/index.scss";

    import TextOutput from "../lib/components/TextOutput.svelte";

    let input;
</script>

<svelte:head>

    <title>WeirdText</title>

</svelte:head>

<main>
    <div class="hero">
        <h1>WeirdText</h1>
        <h3>Make your text wierd. Copy and paste anywhere</h3>
    </div>
    <input class="inputBox" bind:value={input} placeholder="Enter your text here..."/>

    <TextOutput title="Upside Down" tool="flip" input={input} />

    <TextOutput title="Bendy Letters" tool="bent" input={input} />
    
    <TextOutput title="Creepify" tool="creepify" input={input}/>

    <TextOutput title="Bubbles!" tool="bubbles" input={input}/>
</main>
