// we need to get down the supabase session from hooks into the layout.server.ts so its usable across every page
//
export const load = async ({ locals: { getSession } }) => {
	// just have this here so we can propograte this function easily
	return {
		session: await getSession(),
	}

}
