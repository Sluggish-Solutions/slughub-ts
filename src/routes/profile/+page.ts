
import type { PageLoad } from "./$types";
import { getCurrUserData } from '$stores/userStore';

// }
export const load: PageLoad = async ({ parent }) => {
	const { supabase, session } = await parent();

	const curr_user = await getCurrUserData();

	const posts_w_comments = await supabase
		.from("posts")
		.select(`*, comments( *, author(*)), likes(*), author(*)`);

	return { curr_user, session, posts_w_comments: posts_w_comments.data }

}


