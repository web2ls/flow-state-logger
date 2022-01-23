<script>
	import Controls from './Controls.svelte';
	import Header from './Header.svelte';
	import Timer from './Timer.svelte';
</script>

<div class="container">
	<Header />
	<div class="timer-container">
		<Timer />
		<Controls />
	</div>
</div>

<style>
	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 550px;
		height: 300px;
		z-index: 1;
		overflow: hidden;
		background: #262626;
		border-radius: 10%;
		padding: 20px;
	}

	.timer-container {
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		height: calc(100% - 70px);
	}
</style>
