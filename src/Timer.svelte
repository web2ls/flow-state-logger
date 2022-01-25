<script>
	export let value;

	function getTime(value) {
		const valueInMinutes = Math.floor(value / (1000 * 60));
		let secondsReminder = (value - valueInMinutes * 1000 * 60) / 1000;
		if (String(secondsReminder).length < 2)
			secondsReminder = `0${secondsReminder}`;

		return [valueInMinutes, secondsReminder];
	}
</script>

<div class="timer">
	<div class="part">{getTime(value)[0]}</div>
	<div>:</div>
	<div class="part">{getTime(value)[1]}</div>
</div>

<style>
	.timer {
		display: flex;
		flex-direction: row;
		margin-bottom: 20px;
		font-size: 60px;
		color: #f5f5f5;
	}

	.part {
		width: 100px;
	}
</style>
