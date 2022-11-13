import { writable } from 'svelte/store';
export const videoStore = writable([])
export const listsStore = writable(['default'])
export const currentListStore = writable(['default'])
export const modal = writable(false)
export const currentVideo = writable('')