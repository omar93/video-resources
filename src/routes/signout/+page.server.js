import { redirect } from "@sveltejs/kit"

export const actions = {
    default: ({ locals }) => {
        locals.pocketbase.authStore.clear()
        locals.user = undefined
        throw redirect(303, '/login')
    }

}