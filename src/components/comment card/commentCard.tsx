import {useState} from "react";
import {CommentCardProps} from "../../types";
import style from "./commentStyle.module.scss";

export default function CommentCard({
	name,
	username,
	image,
	content,
	replyingTo,
	replies,
}: CommentCardProps) {
	const [isReplying, setIsReplying] = useState(false);

	return (
		<>
			<div className={style.comment}>
				<img
					src={image}
					alt="user image"
					height={40}
					width={40}
					className={style.pfp}
				/>
				<div className={style.header}>
					<div>
						<div className={style.name}>{name}</div>
						<div className={style.username}>@{username}</div>
					</div>
					<button
						className={style.reply}
						onClick={() => setIsReplying(!isReplying)}
					>
						Reply
					</button>
				</div>
				<div className={style.commentContent}>
					{replyingTo ? (
						<span className={style.replyingTo}>@{replyingTo} </span>
					) : null}
					{content}
				</div>
				{isReplying ? (
					<div className={style.replyInput}>
						<textarea name="reply" rows={2}></textarea>
						<button className={style.replyBtn}>Post Reply</button>
					</div>
				) : null}
			</div>
			<div className={style.replies}>
				{replies?.map((r) => {
					return (
						<CommentCard
							name={r.user.name}
							username={r.user.username}
							image={r.user.image}
							content={r.content}
							replies={r.replies}
							replyingTo={r.replyingTo}
						/>
					);
				})}
			</div>
		</>
	);
}
