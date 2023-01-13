export interface Campaign {
	id: string;
	name: string;
	description: string;
}

export interface Note {
	campaign_id: string;
	content: string;
}
