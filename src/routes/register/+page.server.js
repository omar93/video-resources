import { redirect } from "@sveltejs/kit";

export const actions = {
    register: async ({ locals, request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        try {
            // Create new user
            await locals.pocketbase.collection('users').create(data);
            // Signin / Authenticate user after creation
            await locals.pocketbase.collection('users').authWithPassword(data.email, data.password);
        } catch (error) {
            console.error('Registration error:', error.message);

            // Extract only serializable parts of the error object
            const errorResponse = {
                error: true,
                message: error.message || 'An error occurred',
                status: error.status || 'unknown',
                url: error.url || 'unknown'
            };

            return errorResponse;
        }

        throw redirect(303, '/login');
    }
};
