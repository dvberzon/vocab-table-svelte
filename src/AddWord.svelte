<script>
  import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
  let nl = '';
  let en = '';

  function handleClick() {
    dispatch('add', {nl, en});
    nl = '';
    en = '';
  }
</script>

<section class="add-form">
  <h3>Add new word</h3>
  <input
    placeholder="Nederlands"
    bind:value={nl}
  />
  <input
    placeholder="English"
    bind:value={en}
  />
  <button type="button" on:click={handleClick}>Add</button>
</section>


<style>
	section.add-form {
		padding: 10px;
	}
</style>