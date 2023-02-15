<script>
    import Clipboard from "svelte-clipboard";
    export let toCopy = "";
</script>

<Clipboard
    text={toCopy}
    let:copy
    on:copy={() => {
        console.log('Has Copied');
    }}>
  <button class="copyBtn" on:click={copy}><i class="fa-regular fa-clipboard"></i></button>
</Clipboard>
