<script>
	import initalVocab from './vocab';
	import AddWord from './AddWord.svelte';
	let nextId = 4;
	let vocab = initalVocab;
	
	function addWord(word) {
		nextId += 1;
		vocab = [...vocab, {...word, id: nextId}];
	}
</script>

<main>
	<h1>Vocab table</h1>
	<AddWord addWord={addWord} />
	<table cellspacing="0" cellpadding="0">
		<thead>
			<tr>
				<th>Nederlands</th>
				<th>English</th>
			</tr>
		</thead>
		<tbody>
			{#each vocab as {nl, en, id} (id)}
				<tr>
					<td>{nl}</td>
					<td>{en}</td>
				</tr>
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

	table td, table th {
		text-align: left;
		padding: 5px;
	}

	th {
		border-bottom: 1px solid #ccc;
	}

	section.add-form {
		padding: 10px;
	}
</style>