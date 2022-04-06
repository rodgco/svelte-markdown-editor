<script lang="ts">
	import Header from './_components/header.svelte';
	import Icon from './_components/icon.svelte';

	import Contact from './_modals/contact.svelte';
</script>

<div id="fauxBody">
	<Header>
		<ul slot="nav">
			<li><a href="/about"><Icon>info-circle</Icon>About</a></li>
			<li>
				<a href="http://github.com/rodgco/svelte-markdown-editor" target="_blank"
					><Icon>github</Icon>Source</a
				>
			</li>
			<li><a href="#contact" class="action"><Icon>qa</Icon>Contact</a></li>
		</ul>
	</Header>
	<main>
		<slot />
	</main>
</div>

<Contact />

<style>
	@media screen {
		#fauxBody {
			display: flex;
			flex-direction: column;
			height: 100%;
			overflow: auto;
			color: var(--color-flowText);
		}
		main {
			width: 80%;
			max-width: 60rem;
			margin-left: auto;
			margin-right: auto;
		}
		main > :global(section) {
			max-width: var(--maxWidth-constrain);
			margin: 4em auto;
			padding: 0 var(--pad);
		}
	}
</style>
