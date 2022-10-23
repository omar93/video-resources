import { redirect } from "@sveltejs/kit"

export const actions = {
    login: async ({ locals, request }) => {
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])

        try {
            const { token, user } = await locals.pocketbase.users.authViaEmail(data.email, data.password)
        } catch (error) {
            return {
                error: true,
                message: data.email
            }
        }
        throw redirect(302, '/')
    }
}
