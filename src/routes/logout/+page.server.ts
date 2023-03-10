import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	locals.pb?.authStore.clear();
	throw redirect(303, '/');
}) satisfies PageServerLoad;
