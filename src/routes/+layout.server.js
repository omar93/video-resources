export const load = ({ locals }) => {
    if (locals.user && locals.user.profile) {
        return  JSON.parse(JSON.stringify(locals.user))
    }
}