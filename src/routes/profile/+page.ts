
import type { PageLoad } from "./$types";
import type { PostsWithAllComments } from "$lib/queries/supabase";

// }
export const load: PageLoad = async ({ parent }) => {
	const { supabase, session } = await parent();



	const posts_w_comments = await supabase
		.from("posts")
		.select(`*, comments( *, author(*)), likes(*), author(*)`);

	return { session, posts_w_comments: posts_w_comments.data }

}


