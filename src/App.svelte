<script>
	import AddWord from './AddWord.svelte';
	import Word from './Word.svelte';
	import { vocab } from './vocab';
</script>

<main>
	<h1>Vocab table</h1>
	<AddWord />
	<table cellspacing="0" cellpadding="0">
		<thead>
			<tr>
				<th>Nederlands</th>
				<th>English</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each $vocab as word (word.id)}
				<Word
					{...word}
				/>	
			{/each}
		</tbody>
	</table>
</main>

<style>

	main {	
		padding: 1em;
		max-width: 600px;
		margin: 0 auto;
	}

	table {
		width: 100%;
	}

	table th {
		text-align: left;
		padding: 5px;
	}

	th {
		border-bottom: 1px solid #ccc;
	}
</style>