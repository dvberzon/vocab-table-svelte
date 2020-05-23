<script>
	import initalVocab from './vocab';
	import AddWord from './AddWord.svelte';
	import Word from './Word.svelte';

	let vocab = initalVocab;
	
	function nextId() {
		const maxId = vocab.reduce(
			(prevId, word) => prevId > word.id ? prevId : word.id,
			0
		);
		return maxId + 1;
	}

	function addWord(event) {
		const word = event.detail;
		vocab = [...vocab, {...word, id: nextId()}];
	}

	function removeWord(event) {
		const id = event.detail;
		vocab = vocab.filter((word) => word.id !== id);
	}
</script>

<main>
	<h1>Vocab table</h1>
	<AddWord on:add={addWord} />
	<table cellspacing="0" cellpadding="0">
		<thead>
			<tr>
				<th>Nederlands</th>
				<th>English</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each vocab as word (word.id)}
				<Word
					{...word}
					on:remove={removeWord}
					
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