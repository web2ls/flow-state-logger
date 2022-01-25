<script>
	import Button from './Button.svelte';

	export let inProcess;
	export let startTimer;
	export let stopTimer;
</script>

<div class="controls">
	{#if !inProcess}
		<Button label="Start" onClickHandler={startTimer} />
	{:else}
		<Button label="Pause" onClickHandler={stopTimer} />
		<Button label="Stop" onClickHandler={stopTimer} />
	{/if}
</div>
