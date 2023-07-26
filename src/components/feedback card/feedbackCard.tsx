import {useState} from "react";
import {Link} from "react-router-dom";
import ArrowUp from "../../assets/shared/icon-arrow-up.svg";
import Comments from "../../assets/shared/icon-comments.svg";
import {FeedBackCardProps} from "../../types";
import style from "./feedbackCardStyle.module.scss";

export default function FeedBackCard({
	title,
	category,
	upvotes,
	description,
	comments,
	id,
}: FeedBackCardProps) {
	const [upvoted, setUpvoted] = useState(false);

	const handleClick = () => {
		setUpvoted((current) => !current);
	};

	return (
		<div className={style.container}>
			<button
				onClick={handleClick}
				className={`${upvoted ? style.upvoted : null} ${style.upvote}`}
			>
				<img src={ArrowUp} alt="arrow up" className={style.buttonIcon} />
				<h4>{upvoted ? upvotes + 1 : upvotes}</h4>
			</button>
			<div className={style.txt_w}>
				<Link
					to={
						id
							? `/Explorer-Product-Feedback-React-Ts/detail/${id}`
							: "#"
					}
				>
					<h3 className={style.title}>{title}</h3>
				</Link>
				<p className={style.desc}>{description}</p>
				<p className={style.category}>{category}</p>
			</div>
			<div className={style.comments}>
				<img src={Comments} alt="Comment icon" height={16} width={18}></img>
				{comments || 0}
			</div>
		</div>
	);
}
