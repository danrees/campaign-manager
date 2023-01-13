<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import Button from '@smui/button';
	import AutoAdjust from '@smui/top-app-bar/src/AutoAdjust.svelte';
	import type { LayoutData } from './$types';

	let topAppBar: TopAppBar;

	export let data: LayoutData;
</script>

<div class="flexy">
	<div class="top-app-bar-container flexor">
		<TopAppBar variant="short" bind:this={topAppBar}>
			<Row>
				<Section>
					<Title><a href="/">Campaign Manager</a></Title>
				</Section>
				{#if data?.user}
					<Button color="secondary" href="/logout">Logout</Button>
				{:else}
					<Button color="secondary" href="/login">Login</Button>
				{/if}
				<Section />
			</Row>
		</TopAppBar>
		<AutoAdjust {topAppBar}>
			{#if data?.user}
				<p>Welcome {data.user.name}</p>
			{/if}
			<slot />
		</AutoAdjust>
	</div>
</div>
