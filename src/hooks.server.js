// src/hooks.js
import PocketBase from 'pocketbase';
import { PUBLIC_DB_CONNECTIONURL } from '$env/static/public'

export async function handle({ event, resolve }) {
    event.locals.pocketbase = new PocketBase(PUBLIC_DB_CONNECTIONURL);

    // load the store data from the request cookie string
    event.locals.pocketbase.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    if(event.locals.pocketbase.authStore.isValid) {
        event.locals.user = event.locals.pocketbase.authStore.model
    }

    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.set('set-cookie', event.locals.pocketbase.authStore.exportToCookie({secure:true}));

    return response;
}