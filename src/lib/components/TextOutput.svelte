<script>
    export let input = "This is what THIS looks like";
    export let title;
    export let tool;
    let output;

    import { luni } from "../lunicode";
    import CopyButton from "./CopyButton.svelte";

    luni.initAll();

    luni.tools.creepify.options.maxHeight = 2;
    luni.tools.creepify.options.randomization = 35;

    $: {

        if(tool=="flip"){
            output = luni.tools.flip.encode(input);
        }

        else if(tool=="bent") {
            output = luni.tools.bent.encode(input);
        }

        else if(tool=="creepify") {
            output = luni.tools.creepify.encode(input);
        }

        else if(tool=="bubbles") {
            output = luni.tools.bubbles.encode(input);
        }
    }
</script>

<h2>{title}</h2>

<div class="output-wrap">

    <div class="output">{output}</div>

    <CopyButton toCopy={output} />
    
</div>
