<script lang="ts">
	import type { PageServerData } from './$types';
	import List, { Item } from '@smui/list';

	export let data: PageServerData;
</script>

<h1>Campaigns</h1>
{#if data.campaigns}
	<List>
		{#each data?.campaigns as campaign}
			<Item>
				<a href={`/campaign/${campaign.id}`}>{campaign.name}</a>
			</Item>
		{/each}
	</List>
{/if}
