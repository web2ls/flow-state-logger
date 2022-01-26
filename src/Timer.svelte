<script>
	import { getTime } from './helpers';
	export let value;
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
