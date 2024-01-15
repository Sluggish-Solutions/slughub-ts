
import { createClient, type QueryData } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { type Database } from '../../../types/supabase.types';
// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)

const posts_w_comments_query =  supabase
	.from("posts")
	.select(`*, comments(*), likes(*), author(*)`);
export type PostsWithAllComments = QueryData<typeof posts_w_comments_query>[0]
