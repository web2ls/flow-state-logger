<script>
	export let label;
	export let onClickHandler;
</script>

<button type="button" class="control-button" on:click={onClickHandler}
	>{label}</button
>

<style>
	.control-button {
		text-align: center;
		color: #f5f5f5;
		font-size: 14px;
		border: 2px solid #343434;
		border-radius: 5px;
		padding: 10px 15px;
		transition: all 0.3s;
		outline: 0;
		background: none;
		cursor: pointer;
	}

	.control-button:hover {
		border: 2px solid #f5f5f5;
	}
</style>
