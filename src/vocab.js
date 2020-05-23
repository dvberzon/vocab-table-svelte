import { writable } from 'svelte/store';

const initialVocab = [
  {
    id: 1,
    nl: 'vrouw',
    en: 'womand',
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

function nextId(vocab) {
  const maxId = vocab.reduce(
    (prevId, word) => prevId > word.id ? prevId : word.id,
    0
  );
  return maxId + 1;
}

function createVocab() {
  const { subscribe, update } = writable(initialVocab);

  return ({
    subscribe,
    addWord(word) {
      update((vocab) => {
        const id = nextId(vocab);
        return [...vocab, {...word, id}]
      })
    },
    removeWord(id) {
      update((vocab) => (
        vocab.filter((word => id !== word.id))
      ))
    }
  });
}

export const vocab = createVocab();