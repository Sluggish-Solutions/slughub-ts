
// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Database } from '../types/supabase.types.js'
import type { Handle } from '@sveltejs/kit'
// hooks.server.ts basically runs the code inside whenever the server gets a request
export const handle: Handle = async ({ event, resolve }) => {
	// makes supabase usable throughout the project by passing in locals into load function
  event.locals.supabase = createSupabaseServerClient<Database>({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event,
  })
  /**
   * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
   */
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    return session
  }
  return resolve(event, {
	// im not fully sure what this is supposed to do
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}
