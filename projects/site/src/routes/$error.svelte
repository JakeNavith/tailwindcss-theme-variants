<script context="module">
    export async function load({ error, status }) {
        return {
            props: { error, status }
        };
    }
</script>

<script>
    export let status;
    export let error;
</script>

<h1>{status}</h1>
<p>{error.message}</p>
{#if error.stack}
  <pre>{error.stack}</pre>
{/if}
