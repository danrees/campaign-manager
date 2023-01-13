import type { PageServerLoad } from './$types';
import type { Campaign } from '$lib/campaign';

export const load = (async ({ locals }) => {
	const page = 1;
	const campaigns = await locals?.pb?.collection('campaigns').getList<Campaign>(page, 10);
	return {
		campaigns: campaigns?.items.map((c) => structuredClone(c)),
		page: campaigns?.page || page,
		totalPages: campaigns?.totalPages || 0
	};
}) satisfies PageServerLoad;
