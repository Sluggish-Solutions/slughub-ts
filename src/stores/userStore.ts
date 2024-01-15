import { writable } from 'svelte/store';

export const curr_user_id = writable('');

export const setUserId = (id: any) => {
    curr_user_id.set(id);
}


export const getCurrUserData  = async () => {
	let user_id = ''
	curr_user_id.subscribe((value) => user_id = value);

	const res = await fetch('/api/getAllUserData', {
		method: 'POST',
		body: JSON.stringify({
			"user_id": user_id,
		})
	})
	const response = await res.json()
	console.log(response)
return response	
	
}
export const getUserData  = async (user_id: string) => {
	const res = await fetch('/api/getAllUserData', {
		method: 'POST',
		body: JSON.stringify({
			"user_id": user_id,
		})
	})
	const response = await res.json()
	console.log(response)
return response
	
}
