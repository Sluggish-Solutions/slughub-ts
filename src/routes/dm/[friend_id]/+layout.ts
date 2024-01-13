//what is this local import doing here?
export const load = async({parent}) => {
    cosnt {supabase, session} = await parent()
}
