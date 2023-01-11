<script lang="ts">
	import TextField from '@smui/textfield';
	import Button from '@smui/button';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let username = '';
	let password = '';
</script>

<form method="post">
	{#if form?.isError}
		<p>{form.error}</p>
	{/if}
	<TextField label="Username" bind:value={username} input$name="username" />
	<TextField label="Password" type="password" bind:value={password} input$name="password" />
	<Button>Submit</Button>
</form>
