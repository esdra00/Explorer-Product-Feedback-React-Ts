import {OrderByDirection} from "firebase/firestore";

// export interface DataDbTypes {
// 	category: string;
// 	comments: CommentsTypes[];
// 	description: string;
// 	id: number;
// 	title: string;
// 	upvotes: number;
// }
// [];

// FeedBack Card Props
export interface FeedBackCardProps {
	title: string;
	category: string;
	upvotes: number;
	description: string;
	comments?: number;
	id?: number;
}

// Comment Section Props
export interface CommentSectionProps {
	id: number;
	content: string;
	user: {image: string; name: string; username: string};
	replies?: RepliesTypes[];
}

// Comment Card Props
export interface CommentCardProps {
	name: string;
	username: string;
	image: string;
	content: string;
	replyingTo?: string;
	replies?: RepliesTypes[];
}
interface RepliesTypes {
	content: string;
	replyingTo: string;
	user: {
		image: string;
		name: string;
		username: string;
	};
	replies?: RepliesTypes[];
}

// Homepage Context
export interface CategoryContextProps {
	category: string;
	setCategory: React.Dispatch<React.SetStateAction<string>>;
}
export interface FilterContextProps {
	filter: OrderByDirection;
	setFilter: React.Dispatch<React.SetStateAction<OrderByDirection>>;
}

// New FeedBack Form
export interface NewFeedbackTypes {
	title?: string;
	category?: string;
	description?: string;
	status: string;
	id: number;
	upvotes: number;
}

// Edit FeedBack Form
export interface EditTypes {
	[key: string]: string;
	title: string;
	category: string;
	status: string;
	description: string;
}
