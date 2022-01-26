<script>
	import Button from './Button.svelte';

	export let inProcess;
	export let inPause;
	export let startTimer;
	export let stopTimer;
	export let pauseTimer;
</script>

<div class="controls">
	{#if !inProcess}
		<Button label="Start" onClickHandler={startTimer} />
	{:else if inPause}
		<Button label="Continue" onClickHandler={startTimer} />
	{:else}
		<Button label="Pause" onClickHandler={pauseTimer} />
		<Button label="Stop" onClickHandler={stopTimer} />
	{/if}
</div>
