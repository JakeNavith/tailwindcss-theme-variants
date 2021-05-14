<script>
	import ErrorPage from "./_error.svelte";
</script>

<!-- https://firebase.google.com/docs/hosting/full-config#404 -->
<ErrorPage status={404} error={{ name: "Error", message: "Not found" }} />
