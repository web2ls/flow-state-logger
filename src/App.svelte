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
		color: #f5f5f5;
		background: #191919;
		text-align: center;
		box-sizing: border-box;
	}

	:global(html) {
		overflow: hidden;
		padding: 0;
		margin: 0;
		width: 100%;
		height: 100%;
	}
</style>
