/**
 * Campaign is primarily the holder for ... well, the campaign/story
 */
export interface Campaign {
	id: string;
	name: string;
	description: string;
}

/**
 * Note are meant to be quick pieces of information you want to jot down against
 * a campaign. The eventual idea is that a note can be converted into the beginnings
 * of another type.
 */
export interface Note {
	id: string;
	campaign_id: string;
	content: string;
}

/**
 * Page is going to be the main 'object' of a campaign, this will sort of end
 * up being like a wiki at first unless I come up with a better model
 */
export interface Page {
	id: string;
	campaign_id: string;
	parent_page_id: string;
	content: string;
}

/**
 * A place in the story, a piece of the setting. Could be just a specialized page?
 */
export interface Location {
	id: string;
	campaign_id: string;
	parent_page_id?: string;
	short_description: string;
	long_description?: string;
}

/**
 * Character in the story, could this just be a specialized page as well?
 */
export interface Character {
	id: string;
	name: string;
	campaign_id: string;
	description: string;
}

/**
 * Meant to be like character notes, but this might not be useful for building
 * a campaign rather than running one ... hmmm
 */
export interface CharacterEvent {
	id: string;
	character_id: string;
	content: string;
}
