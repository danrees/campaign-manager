<script lang="ts">
	import Campaign from '$lib/components/campaign/Campaign.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<div>
	{#if data?.campaign}
		<Campaign campaign={data?.campaign} notes={data.notes} />
		<a href={`/campaign/${data.campaign.id}/page`}>Edit Pages</a>
	{/if}
</div>
