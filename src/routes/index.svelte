<script lang="ts">
	import { Parser, HtmlRenderer } from 'commonmark';

	let text: string = '';

	const parser = new Parser();
	const writer = new HtmlRenderer({ smart: true });

	let rendered = '';

	$: parsed = parser.parse(text);
	$: rendered = writer.render(parsed);
</script>

<textarea bind:value={text} wrap="on" rows="10" />

<div>{@html rendered}</div>

<style>
	textarea,
	div {
		background-color: hsl(0, 3%, 90%);
		display: block;
		overflow: auto;
		box-sizing: border-box;
		padding: 1rem;
		width: 100%;
		resize: none;
		border: none;
		border-radius: 5px;
		outline: none;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
		margin-bottom: 2rem;
	}
</style>
