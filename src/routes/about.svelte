<div id="preview">
	<h1>Svelte Markdown Editor</h1>
	<p>
		Just playing around with Svelte and building a portfolio of things to show. This Web App is
		build wusing Svelte Kit and <a href="https://github.com/commonmark/commonmark.js">CommonMark</a>
		to parse the full text from a textarea to HTML.
	</p>
	<h2>Svelteness</h2>
	<p>
		The beauty of Svelte lies with a couple of reactive statements that implements all the logic
		necessary for this app.
	</p>
	<p>
		The first one, triggered whenever the textarea value is changed, will use commonmark.js parser
		to parse markdown text into something (an AST probably).
	</p>
	<p>
		Updating this variable triggers the second reactive statement that will render this AST??? into
		HTML.
	</p>
</div>

<style>
	#preview {
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
	#preview :global(li) {
		margin-left: 1.25rem;
	}
	#preview > :global(.placeholder) {
		color: rgba(0, 0, 0, 0.5);
	}
</style>
