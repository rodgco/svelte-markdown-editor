<script lang="ts">
	import { Parser, HtmlRenderer } from 'commonmark';

	let text = '';

	const parser = new Parser();
	const writer = new HtmlRenderer({ smart: true });

	let rendered = '';
	let raw = false;

	$: console.log(raw);
	$: parsed = parser.parse(text);
	$: rendered = writer.render(parsed);
</script>

<textarea bind:value={text} wrap="on" rows="10" placeholder="Type some markdown here..." />
<label><input type="checkbox" bind:checked={raw} />Raw</label>

{#if raw}
	<pre class="preview" class:placeholder={!rendered.length}>{rendered ||
			'...it will render here.'}</pre>
{:else}
	<div class="preview" class:placeholder={!rendered.length}>
		{@html rendered || '...it will render here.'}
	</div>
{/if}

<style>
	textarea,
	.preview {
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
		margin: 0 0 2rem 0;
	}
	.preview :global(li) {
		margin-left: 1.25rem;
	}
	.preview.placeholder {
		color: rgba(0, 0, 0, 0.5);
	}
</style>
