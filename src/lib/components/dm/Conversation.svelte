<script lang="ts">
	import { Avatar} from '@skeletonlabs/skeleton';

	import type { Tables } from '../../../../types/supabase.types';
	export let friend_data: Tables<'users'>;
	export let last_sent_message: string;
	export let curr_user_id: string;
	export let conversation_data: Tables<"conversations">;

	let opposing_friend: Tables<"users">;

	if (curr_user_id == conversation.user1) {
		//@ts-expect-error because its cringe
		opposing_friend = conversation.user2
	} else if (curr_user_id == conversation.user2){
		//@ts-expect-error because the conversation.user1 is actually
		//a complex query join and i havent figured out how to get the type 
		// to flow down into this component
		opposing_friend = conversation.user1
	}
</script>

<main>
	<div class="w-max">
		{#if friend_data.avatar_url}
			<!-- content here -->
			<Avatar src={opposing_friend!.avatar_url} />
		{/if}

		{#if last_sent_message}
			<h1>{last_sent_message}</h1>
			<!-- content here -->
		{/if}
	</div>
</main>
