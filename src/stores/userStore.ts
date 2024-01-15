import { writable } from 'svelte/store';

export const curr_user_id = writable('');

export const setUserId = (id: any) => {
	console.log('setting user id', id)
    curr_user_id.set(id);
}
