<script>
	import TimePresets from './TimePresets.svelte';
	import Controls from './Controls.svelte';
	import CustomTime from './CustomTime.svelte';
</script>

<div class="container">
	<TimePresets />
	<CustomTime />
	<Controls />
</div>

<style>
	.container {
		position: relative;
		width: 100vw;
		height: 100vh;
		z-index: 1;
		overflow: hidden;
		background: rgb(189, 184, 184);
		text-align: center;
		color: #fff;
	}
</style>
