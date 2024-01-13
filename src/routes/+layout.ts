// in this file we want to instantiate the load client so the client can also get data from svelte kit. Faster than doing it through server

import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public"
import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit"
import type { Database } from "../../types/supabase.types"
//@ts-expect-error depends has any time, we dont care abt it though 
export const load = async ({ fetch, data, depends }) => {
	depends("suapbase:auth")

	const supabase = createSupabaseLoadClient<Database>(
		{
			supabaseKey: PUBLIC_SUPABASE_ANON_KEY, supabaseUrl: PUBLIC_SUPABASE_URL,
			event: { fetch },
			serverSession: data.session
		});
	const { data: { session } } = await supabase.auth.getSession();
	return { supabase, session }


}
