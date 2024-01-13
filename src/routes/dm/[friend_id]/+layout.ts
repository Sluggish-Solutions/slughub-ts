
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
export const ssr = false;
export const load = (async ({ parent }) => {
	
	const { supabase, session, } = await parent();
    
    // quite possibly the sexiest sql_call ive done here holy moly
}) satisfies LayoutLoad;
