<script>
	let nextId = 4;
	let vocab = [
		{
			id: 1,
			nl: 'vrouw',
			en: 'woman',
		},
		{
			id: 2,
			nl: 'sinasappelsaap',
			en: 'orange juice',
		},
		{
			id: 3,
			nl: 'boterham',
			en: 'slice of bread',
		},
	];
	let newWord = {nl: '', en: ''};
	
	function addWord() {
		nextId += 1;
		vocab = [...vocab, {...newWord, id: nextId}];
		newWord = {nl: '', en: ''};
	}
</script>

<main>
	<h1>Vocab table</h1>
	<section class="add-form">
		<h3>Add new word</h3>
		<input
			placeholder="Nederlands"
			bind:value={newWord.nl}
		/>
		<input
			placeholder="English"
			bind:value={newWord.en}
		/>
		<button type="button" on:click={addWord}>Add</button>
	</section>
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