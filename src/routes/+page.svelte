<script>
    import "../lib/index.scss";

    import TextOutput from "../lib/components/TextOutput.svelte";

    let value;
</script>

<svelte:head>

    <title>WeirdText</title>

</svelte:head>


<main>
    <div class="hero">
        <h1>WeirdText</h1>
        <p class="by">by <a href="https://www.isaxk.com">isaxk</a></p>
        <h3>
            Make your text wierd. Copy and paste anywhere
        </h3>

    </div>
    <input class="inputBox" bind:value placeholder="Enter your text here..."/>
    
    
    <div class="copy-prompt">Click to copy <i class="fa-solid fa-arrow-turn-down"></i></div>


    <TextOutput title="Upside Down" tool="flip" input={value} />

    <TextOutput title="Bendy Letters" tool="bent" input={value} />
    
    <TextOutput title="Creepify" tool="creepify" input={value}/>

    <TextOutput title="Bubbles!" tool="bubbles" input={value}/>
</main>

<footer style="text-align: center; padding: 50px; margin-top: 100px;">
    Copyright &copy; isaxk.com 2023. <a href="https://github.com/isaxk/weirdtext">View on GitHub</a>
</footer>