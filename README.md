# Svelte Markdown Editor

Just playing around with Svelte and building a portfolio of things to show. This Web App is build wusing Svelte Kit and [CommonMark](https://github.com/commonmark/commonmark.js) to parse the full text from a `textarea` to HTML.

## Svelteness

The beauty of Svelte lies with a couple of reactive statements that implements all the logic necessary for this app. 

The first one, triggered whenever the textarea value is changed, will use commonmark.js parser to parse markdown text into something (an AST probably). 

Updating this variable triggers the second reactive statement that will render this AST??? into HTML.

``` svelte
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
```
