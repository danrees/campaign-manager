<script lang="ts">
	import Page from '$lib/components/campaign/Page.svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1>Campaign {data.campaign.name}</h1>
<Page />
