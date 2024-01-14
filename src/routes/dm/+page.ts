
import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
export const ssr = false;
export const load = (async ({ parent }) => {

    const { supabase, session, } = await parent();
    //what should this even do?, we have a layout for what exactly? 
    // ah layout should be to show all the people you have a thingy with

    // we need some sort of complex query to do this, pretty sure we need
    // to return supabase as well though
    //
    //
    // you can message anyone you want, so yes i think there should be a conversation 
    // table along with a message table as well
    //should returnnnn, all existing conversations from this user and others

    // quick check that this person can actually access this url and message people
    if (session?.user.aud !== "authenticated") {
        return redirect(303, "/signup")

    }

    // now we want do to some sort of complex supabase query
    const {data: conversations} = await supabase
        .from("conversations")
        //this selects the info from the table, and the users table row data for user1 and user 2
        .select(`*, user1(*), user2(*)`)
        //what exactly does this "or" do?
        //The .or method in this Supabase query is used to create a compound 
        //logical OR condition. In this specific case, it is being used to 
        //retrieve rows from the 'conversations' table where either user1 is equal to 
        //the ID of the user in the current session (session?.user.id) or 
        //user2 is equal to the ID of the user in the current session.
        .or(`user1.eq.${session?.user.id}, user2.eq.${session?.user.id}`);
    console.log(conversations);
    
    return {conversations: conversations}



}) satisfies LayoutLoad;
