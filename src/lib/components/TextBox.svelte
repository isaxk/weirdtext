<script lang="ts">
    import { inputtedText } from "$lib/stores";
</script>

<div class="text-box-container">
    <input type="text" class="text-box" placeholder="Enter your text..." bind:value={$inputtedText} maxlength="30">
</div>

<style>
    .text-box-container {
        display: grid;
        justify-items: center;
        padding: 0px 20px;
    }
    input {
        width: 100%;
        max-width: 600px;
        padding: 20px 15px;
        background-color: transparent;
        border: 2px solid grey;
        border-radius: 7px;
        font-size: 18px;
        color: var(--text-color);
        transition: 0.3s;
        outline: 1px solid transparent;
        font-family: var(--text-font-family);
    }
    input:focus {
        border-radius: 5px;
        outline: 1px solid grey;
        border-color: var(--text-color);
    }
</style>