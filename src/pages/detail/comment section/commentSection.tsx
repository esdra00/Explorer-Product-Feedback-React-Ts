import CommentCard from "../../../components/comment card/commentCard";
import {CommentSectionProps} from "../../../types";
import style from "./commentSectionStyle.module.scss";

export default function CommentSection({comments}: {comments: CommentSectionProps[]}) {
	return (
		<div className={style.comments_w}>
			<h3 className={style.commentsNumber}>{comments?.length || 0} comments</h3>
			{comments?.map((i: CommentSectionProps) => {
				return (
					<CommentCard
						name={i.user.name}
						username={i.user.username}
						image={i.user.image}
						content={i.content}
						replies={i.replies}
					/>
				);
			})}
		</div>
	);
}
