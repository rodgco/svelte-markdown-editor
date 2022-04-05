<script lang="ts">
	import { Parser, HtmlRenderer } from 'commonmark';

	let text: string = '# Markdown Editor\n* Easy\n* Peasy';

	const parser = new Parser();
	const writer = new HtmlRenderer({ smart: true });

	let rendered = '';

	$: parsed = parser.parse(text);
	$: rendered = writer.render(parsed);
</script>

<h1>Markdown Editor</h1>

<textarea bind:value={text} wrap="on" rows="10" />

<div>{@html rendered}</div>

<style>
	textarea {
		display: block;
		overflow: auto;
		box-sizing: border-box;
		padding: 1rem;
		width: 80%;
		margin: 0 auto;
		resize: none;
		border: none;
		outline: none;
	}
</style>
