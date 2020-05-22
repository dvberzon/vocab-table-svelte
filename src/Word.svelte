<script>
  import { createEventDispatcher } from 'svelte';
  export let nl;
  export let en;
  export let id;

	const dispatch = createEventDispatcher();
  
  let hovering;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
  }
  
  function remove() {
    dispatch('remove', id);
  }
</script>

<tr on:mouseenter={enter} on:mouseleave={leave}>
  <td>{nl}</td>
  <td>
    {en}
  </td>
  <td class="control">
    {#if hovering}
      <button on:click={remove}>
        X
      </button>
    {/if}
  </td>
</tr>

<style>
  td {
    text-align: left;
		padding: 5px;
    line-height: 20px
  }
	td.control {
		width: 40px;
	}
</style>