import { redirect } from "@sveltejs/kit"

export const load = ({ locals }) => {
    if(locals.pocketbase.authStore.isValid) {
        throw redirect(303, '/')
    }
}

export const actions = {
    login: async ({ locals, request }) => {
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])

        try {
            await locals.pocketbase.collection('users').authWithPassword(data.email, data.password)
        } catch (error) {
            return {
                error: true,
                message: data.email
            }
        }
        throw redirect(303, '/')
    }
}
