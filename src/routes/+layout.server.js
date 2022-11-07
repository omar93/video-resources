export const load = ({ locals }) => {
    if (locals.user && locals.user.profile) {
        return  JSON.parse(JSON.stringify({
            user: locals.user,
            youtube: locals.youtube
        }))
    }
}