import type { Campaign, Note } from '$lib/campaign';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals, params }) => {
	const campaignID = params.id;
	const campaign = await locals.pb?.collection('campaigns').getOne<Campaign>(campaignID);
	const notes = await locals.pb?.collection('notes').getList<Note>(1, 10);
	return {
		campaign: structuredClone(campaign),
		notes: notes?.items.map((note) => structuredClone(note)) || []
	};
}) satisfies PageServerLoad;
