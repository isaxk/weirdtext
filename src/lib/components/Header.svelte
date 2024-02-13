<script lang="ts">

</script>

<div class="header">
    <div class="title">
        <a href="/">WeirdText</a>
    </div>
    <div class="links">
        <a href="/about">About</a>
        <a href="/about">Creator</a>
    </div>
</div>

<style>
    .header {
        position: -webkit-sticky;
        position: sticky;
        height: 50px;
        background-color: var(--header-background-color);
        display: grid;
        align-items: center;
        grid-template-columns: 1fr max-content;
        padding: 0px 20px;
    }
    .title {
        font-size: 20px;
        font-weight: 500;
    }
    a {
        color: var(--text-color);
        text-decoration: none;
    }
    .links a {
        margin: 0px 0px 0px 10px;
    }
</style>