<script>
    import "../../lib/index.scss";
</script>

<svelte:head>
    <title>WeirdText - About</title>
</svelte:head>

<main>
    <div class="hero">
        <h1>About WeirdText</h1>
        <h3>
            <a href="/">&lt; Home</a> |
            <a href="https://www.github.com/isaacboor/weirdtext">Github</a>
        </h3>
    </div>
    <div class="text">
        <h2>What is WeirdText?</h2>
        <p>
            WeirdText is a website that takes your input and modifies it to look աҽìɾժ.
        </p>

        <h2>How was it built?</h2>
        <p>
            I built this in SvelteKit, a simple javascript framework and it was actually really fun to work with. I modified a library called lunicode.js to make the text conversions.
        </p>
    </div>
</main>
