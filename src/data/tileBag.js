import { writable } from "svelte/store";
import { initialTileBag } from "../constants/tileBag";

function createTileBag() {
  const { subscribe, update } = writable(initialTileBag);
  
  return {
    subscribe,
    removeTile: (letter) => update((currentTileBag) => {
      let tileIndex = currentTileBag.findIndex((tile) => tile.letter === letter);
      
      if (tileIndex > -1) {
        currentTileBag.splice(tileIndex, 1);
      }
      
      return currentTileBag;
    })
  }
}

export const tileBag = createTileBag();