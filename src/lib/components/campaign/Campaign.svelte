<script lang="ts">
	import type { Campaign, Note } from '$lib/campaign/types';
	import Card from '@smui/card';
	import List, { Item } from '@smui/list';

	export let campaign: Campaign;
	export let notes: Note[];
</script>

<Card>
	<h1>{campaign.name}</h1>
	<List>
		{#each notes as note}
			<Item>{note.content}</Item>
		{/each}
	</List>
</Card>
