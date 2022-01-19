<script>
	import Container from './Container.svelte';
</script>

<div>
	<Container />
</div>

<style>
	:global(body) {
		overflow: hidden;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
	}

	:global(html) {
		overflow: hidden;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
