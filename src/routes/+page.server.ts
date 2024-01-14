import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	likePost: async ({ request, locals }) => {
		console.log(request);
		console.log(locals);
	}
};
