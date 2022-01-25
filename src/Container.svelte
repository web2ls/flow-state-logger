<script>
	import Controls from './Controls.svelte';
	import Header from './Header.svelte';
	import Timer from './Timer.svelte';

	let inProcess = false;
	let timerValue = 1500000;
	let intervalId = null;
	const SEC_IN_MS = 1000;

	function startTimer() {
		intervalId = setInterval(intervalAction, 1000);
		inProcess = true;
	}

	function intervalAction() {
		const newValue = timerValue - SEC_IN_MS;
		timerValue = newValue;
	}

	function stopTimer() {
		inProcess = false;
		timerValue = 1500000;
		clearInterval(intervalId);
	}
</script>

<div class="container">
	<Header />
	<div class="timer-container">
		<Timer value={timerValue} />
		<Controls {inProcess} {startTimer} {stopTimer} />
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
