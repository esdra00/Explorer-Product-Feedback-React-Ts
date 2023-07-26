import {Link, useParams} from "react-router-dom";
import GoBack from "../../components/Go Back Button/goBack";
import SuggestionCard from "../../components/feedback card/feedbackCard";
import {useFetchID} from "../../hooks/useFetchId";
import CommentInput from "./comment input/commentinput";
import CommentSection from "./comment section/commentSection";
import style from "./detailStyle.module.scss";

export default function Detail() {
	const {id} = useParams() as {id: string};
	const {data} = useFetchID(id);

	return (
		<div className={style.container}>
			<nav className={style.nav}>
				<GoBack />
				<button className={style.edit}>
					<Link to={data?.id ? `/edit/${data.id}` : "#"}>
						<h4>Edit Feedback</h4>
					</Link>
				</button>
			</nav>
			{data && (
				<>
					<SuggestionCard
						title={data.title}
						category={data.category}
						upvotes={data.upvotes}
						description={data.description}
						comments={data.comments?.length}
					/>
					<CommentSection comments={data?.comments} />
				</>
			)}
			<CommentInput />
		</div>
	);
}
