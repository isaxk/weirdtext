<script>
    import Clipboard from "svelte-clipboard";
    export let toCopy = "";
    let icon = "fa-regular fa-clipboard";
</script>

<Clipboard
    text={toCopy}
    let:copy
    on:copy={() => {
        console.log('Has Copied');
        icon = "fa-solid fa-check";
        window.setTimeout(()=>{icon="fa-regular fa-clipboard"},1000)
    }}>
  <button class="copyBtn" on:click={copy}><i class="{icon}"></i></button>
</Clipboard>

