import { writable } from "svelte/store";

export const exchangeFeedStates = writable({ NASDAQ: true, NYSE: true });
