<script lang="ts">
	import Card, { Content } from '@smui/card';
	import Textfield from '@smui/textfield';
	import HelperText from '@smui/textfield/helper-text';

	let pageContent: string = '';
	export let inputHeight = 24;
</script>

<div>
	<Card>
		<Content>
			<Textfield
				label="Content"
				textarea
				style="width: 100%"
				input$rows={inputHeight}
				bind:value={pageContent}
			>
				<HelperText slot="helper">Page content, accepts markdown</HelperText>
			</Textfield>
		</Content>
	</Card>
</div>
