import { writable } from "svelte/store";

export const exchangeFeedStates = writable({
  NASDAQ: false,
  NYSE: false,
  LSE: false,
  SGX: false,
});
