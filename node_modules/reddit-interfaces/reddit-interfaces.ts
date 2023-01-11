// tslint:disable-next-line: class-name
export interface E_T {
	e: string;
	t: string;
}

export interface Resolution {
	url: string;
	width: number;
	height: number;
}

export interface Images {
	source: {
		url: string;
		width: number;
		height: number;
	};
	resolutions: Resolution[];
	variants: object;
	id: string;
}

export interface Picture {
	url: string;
	width: number;
	height: number;
}

export interface Awardings {
	giver_coin_reward: number;
	subreddit_id?: string;
	is_new: boolean;
	days_of_drip_extension: number;
	coin_price: number;
	id: string;
	penny_donate: number;
	coin_reward: number;
	icon_url: string;
	days_of_premium: number;
	icon_height: number;
	resized_icons: Picture[];
	icon_width: number;
	start_date?: Date;
	is_enabled: boolean;
	description: string;
	end_date?: Date;
	subreddit_coin_reward: number;
	count: number;
	name: string;
	icon_format: string;
	award_sub_type: string;
	penny_price: number;
	award_type: string;
}

// Kind "Listing"
export interface RedditListingInterface {
	// "Listing"
	kind: string;
	data: {
		modhash: string;
		dist: any;
		children: ChildrenInterface[];
		after?: string;
		before?: string;
	};
}

// Kind "t1"
export interface CommentInterface {
	total_awards_received: number;
	approved_at_utc?: number;
	ups: number;
	awarders: any[];
	mod_reason_by?: string;
	banned_by?: string;
	author_flair_type?: string;
	removal_reason?: string;
	// Parent ID (Thread)
	link_id: string;
	// UUID
	author_flair_template_id: string;
	likes?: string;
	replies: RedditListingInterface | '';
	user_reports: string[];
	saved: false;
	id: string;
	banned_at_utc?: number;
	mod_reason_title?: string;
	gilded: number;
	archived: boolean;
	no_follow: boolean;
	// OP
	author: string;
	can_mod_post: boolean;
	send_replies: boolean;
	// If it starts with t3_ it is a top level comment t_1 it is a reply to another comment
	parent_id: string;
	score: number;
	// t2_
	author_fullname: string;
	report_reasons?: string;
	approved_by?: string;
	all_awardings: any[];
	// t5_
	subreddit_id: string;
	// The comment text
	body: string;
	edited: boolean | number;
	author_flair_css_class?: 'string';
	is_submitter: boolean;
	downs: number;
	author_flair_richtext: E_T[];
	author_patreon_flair: boolean;
	body_html: string;
	gildings: object;
	collapsed_reason?: string;
	associated_award?: any;
	stickied: boolean;
	author_premium: boolean;
	// 'public', 'private'
	subreddit_type: string;
	can_gild: boolean;
	subreddit: string;
	author_flair_text_color: string;
	score_hidden: boolean;
	// '/r/<subreddit>/comments/<threadID>/<title>/<commentID>/'
	permalink: string;
	num_reports?: number;
	locked: boolean;
	// t1_<ID>
	name: string;
	created: number;
	author_flair_text: string;
	collapsed: boolean;
	created_utc: number;
	// 'r/<subreddit>'
	subreddit_name_prefixed: string;
	controversiality: number;
	depth: number;
	author_flair_background_color?: string;
	collapsed_because_crowd_control?: any;
	mod_reports: string[];
	mod_note?: string;
	distinguished: string;
}

// t3
export interface ThreadInterface {
	approved_at_utc: Date;
	subreddit: string;
	selftext: string;
	author_fullname: string;
	saved: boolean;
	mod_reason_title: string;
	gilded: number;
	clicked: boolean;
	title: string;
	link_flair_richtext: E_T[];
	subreddit_name_prefixed: string;
	hidden: boolean;
	pwls: number;
	link_flair_css_class: string;
	downs: number;
	thumbnail_height: number;
	hide_score: boolean;
	name: string;
	quarantine: boolean;
	link_flair_text_color: string;
	author_flair_background_color?: string;
	subreddit_type: string;
	ups: number;
	total_awards_received: number;
	media_embed: object;
	thumbnail_width: number;
	author_flair_template_id: string;
	is_original_content: boolean;
	user_reports: string[];
	secure_media: any;
	is_reddit_media_domain: boolean;
	is_meta: boolean;
	category: string;
	secure_media_embed: object;
	link_flair_text: string;
	can_mod_post: boolean;
	score: number;
	approved_by: string;
	author_premium: boolean;
	thumbnail: string;
	edited: boolean;
	author_flair_css_class: string;
	author_flair_richtext: E_T[];
	gildings: object;
	post_hint: string;
	content_categories: string[];
	is_self: boolean;
	mod_note: string;
	created: number;
	link_flair_type: string;
	wls: number;
	removed_by_category: string;
	banned_by?: string;
	author_flair_type: string;
	domain: string;
	allow_live_comments: boolean;
	selftext_html: string;
	likes: number;
	suggested_sort: string;
	banned_at_utc: Date;
	view_count?: number;
	archived: boolean;
	no_follow: boolean;
	is_crosspostable: boolean;
	pinned: boolean;
	over_18: boolean;
	preview: {
		images: Images[];
		enabled: boolean;
	};
	all_awardings: Awardings[];
	awarders: string[];
	media_only: boolean;
	can_gild: boolean;
	spoiler: boolean;
	locked: boolean;
	author_flair_text: string;
	visited: boolean;
	removed_by?: string;
	num_reports: number;
	distinguished: any;
	subreddit_id: string;
	mod_reason_by?: string;
	removal_reason?: string;
	link_flair_background_color: string;
	id: string;
	is_robot_indexable: boolean;
	report_reasons?: any;
	author: string;
	discussion_type?: any;
	num_comments: number;
	send_replies: boolean;
	whitelist_status: string;
	contest_mode: boolean;
	mod_reports: [];
	author_patreon_flair: boolean;
	author_flair_text_color: string;
	permalink: string;
	parent_whitelist_status: string;
	stickied: boolean;
	url: string;
	subreddit_subscribers: number;
	created_utc: Date;
	num_crossposts: number;
	media?: any;
	is_video: boolean;
}

export interface MoreInterface {
	count: number;
	// t1_<ID>
	name: string;
	id: string;
	parent_id: string;
	depth: 1;
	children: string[];
}

export type ChildrenDataInterface = CommentInterface &
	ThreadInterface &
	MoreInterface;

export interface ChildrenInterface {
	kind: string;
	data: ChildrenDataInterface;
}
