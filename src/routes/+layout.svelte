<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import Button from '@smui/button';
	import AutoAdjust from '@smui/top-app-bar/src/AutoAdjust.svelte';
	import type { LayoutData } from './$types';
	import Drawer, { AppContent, Content, Header, Scrim } from '@smui/drawer';
	import List, { Item } from '@smui/list';

	let topAppBar: TopAppBar;

	export let data: LayoutData;
	let open = true;
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
			<div class="drawer-container">
				<Drawer variant="modal" fixed={false} bind:open>
					<Content>
						<Header>
							<Title>Pages</Title>
						</Header>
						<List>
							<Item>A Page</Item>
						</List>
					</Content>
				</Drawer>

				<AppContent class="app-content">
					<main class="main-content">
						{#if data?.user}
							<p>Welcome {data.user.name}</p>
						{/if}

						<slot />
					</main>
				</AppContent>
			</div>
		</AutoAdjust>
	</div>
</div>

<style>
	/* These classes are only needed because the
      drawer is in a container on the page. */
	.drawer-container {
		position: relative;
		display: flex;
		height: 350px;
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		overflow: hidden;
		z-index: 0;
	}

	* :global(.app-content) {
		flex: auto;
		overflow: auto;
		position: relative;
		flex-grow: 1;
	}

	.main-content {
		overflow: auto;
		padding: 16px;
		height: 100%;
		box-sizing: border-box;
	}
</style>
