import { redirect } from "@sveltejs/kit"

export const actions = {
    register: async ({ locals, request }) => {
        const formData = await request.formData()
        const data = Object.fromEntries([...formData])

        console.log(data);

        try {
            const newUser = await locals.pocketbase.users.create(data)

            const { token, user } = await locals.pocketbase.users.authViaEmail(data.email, data.password)

            const updatedProfile = await locals.pocketbase.users.update('profiles', user.profile.id, { name: data.name})

            locals.pocketbase.authStore.clear()

        } catch (error) {
            console.log('OJ:',error)
            return {
                error: true,
                message: error.message
            }
        }

        throw redirect(302, '/login')
    }
}