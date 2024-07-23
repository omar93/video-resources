export const load = ({ locals }) => {
    if (locals.user) {
        return  JSON.parse(JSON.stringify({
            user: locals.user
        }))
    }
}