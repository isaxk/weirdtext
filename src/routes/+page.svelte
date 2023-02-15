<script>
    import "../lib/index.scss";
    import { copied } from '../lib/stores';

    import TextOutput from "../lib/components/TextOutput.svelte";

    let input;
</script>

<svelte:head>

    <title>WeirdText</title>

</svelte:head>


<main>
    <div class="hero">
        <h1>WeirdText</h1>
        <h3>
            Make your text wierd. Copy and paste anywhere
        </h3>
        <h3>by <a href="https://www.isaacboor.me">isaacboor.me</a></h3>
    </div>
    <input class="inputBox" bind:value={input} placeholder="Enter your text here..."/>
    
    
    <div class="copy-prompt">Click to copy <i class="fa-solid fa-arrow-turn-down"></i></div>


    <TextOutput title="Upside Down" tool="flip" input={input} />

    <TextOutput title="Bendy Letters" tool="bent" input={input} />
    
    <TextOutput title="Creepify" tool="creepify" input={input}/>

    <TextOutput title="Bubbles!" tool="bubbles" input={input}/>
</main>
