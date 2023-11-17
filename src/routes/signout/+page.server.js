import { redirect } from '@sveltejs/kit'

export const actions = {
    default: async ({ locals }) => {
        locals.pocketbase.authStore.clear()
        locals.user = undefined
        throw redirect(303, '/')
    }
}