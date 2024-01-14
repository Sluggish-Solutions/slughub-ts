import { createSupabaseLoadClient } from "@supabase/auth-helpers-sveltekit";
import { Database } from "lucide-svelte";

export const supabase = createSupabaseLoadClient<Database>{
    {

			supabaseKey: PUBLIC_SUPABASE_ANON_KEY, supabaseUrl: PUBLIC_SUPABASE_URL,
			event: { fetch },
			serverSession: data.session
    }
}
