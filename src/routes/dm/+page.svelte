<script lang='ts'>
	import { ListBoxItem, ListBox } from '@skeletonlabs/skeleton';
	import Conversation from '$lib/components/dm/Conversation.svelte';

	// expecting data of conversations from the db
	export let data;
	console.log(data.conversations);
	let selectedConversation: string = '';
</script>

<main>
	<div>
		<ListBox>
			{#if data.conversations && data.session?.user}
				{#each data.conversations as conversation}
					<!-- content here -->
					<ListBoxItem
						name="medium"
	  bind:group={selectedConversation}
	  value="{conversation.id}"
						><Conversation
							curr_user_id={data.session.user.id}
							conversation_data={conversation}
						/></ListBoxItem
					>
				{/each}
			{/if}
		</ListBox>
	</div>
</main>
