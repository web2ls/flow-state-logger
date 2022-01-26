<script>
	import Controls from './Controls.svelte';
	import Header from './Header.svelte';
	import Timer from './Timer.svelte';

	let inProcess = false;
	let inPause = false;
	let timerValue = 1500000;
	let intervalId = null;
	const SEC_IN_MS = 1000;

	function startTimer() {
		intervalId = setInterval(intervalAction, 1000);
		inProcess = true;
		inPause = false;
	}

	function stopTimer() {
		inProcess = false;
		timerValue = 1500000;
		clearInterval(intervalId);
	}

	function pauseTimer() {
		inPause = true;
		clearInterval(intervalId);
	}

	function intervalAction() {
		const newValue = timerValue - SEC_IN_MS;
		timerValue = newValue;
	}

	function spaceHitHandler() {
		if (!inProcess) startTimer();
		else if (inProcess && !inPause) pauseTimer();
		else if (inProcess && inPause) startTimer();
	}

	function hotkeyHandler(event) {
		event.preventDefault();
		event.stopPropagation();

		if (event.keyCode === 32) {
			spaceHitHandler();
		}
	}
</script>

<svelte:window on:keydown={hotkeyHandler} />

<div class="container">
	<Header />
	<div class="timer-container">
		<Timer value={timerValue} />
		<Controls {inProcess} {inPause} {startTimer} {stopTimer} {pauseTimer} />
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
