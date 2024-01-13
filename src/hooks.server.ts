
// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import type { Database } from '../types/supabase.types.js'
import type { Handle } from '@sveltejs/kit'
// hooks.server.ts basically runs the code inside whenever 
export const handle: Handle = async ({ event, resolve }) => {
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
	console.log(event);
  return resolve(event, {
		
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })
}
