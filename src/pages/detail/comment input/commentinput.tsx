import {arrayUnion, doc, updateDoc} from "firebase/firestore";
import {FormEvent, useState} from "react";
import {useParams} from "react-router-dom";
import {database} from "../../../firebase/firebase";
import style from "./commentInputStyle.module.scss";

export default function CommentInput() {
	const [comment, setComment] = useState("");
	const {id} = useParams() as {id: string};

	const feedbackDocRef = doc(database, "productRequests", id);

	const updateObj = {
		comments: arrayUnion({
			content: comment,
			id: 33,
			user: {name: "esdra", username: "@ezreall"},
		}),
	};

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setComment(e.target.value);
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			comment ? await updateDoc(feedbackDocRef, updateObj) : null;
			setComment("");
			alert("Comment Posted");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<form
				className={style.container}
				onSubmit={(e) => {
					handleSubmit(e);
				}}
			>
				<h3 className={style.title}>Add Comment</h3>
				<input
					type="text"
					className={style.comment}
					onChange={handleInput}
					value={comment}
				/>
				<div className={style.wrapper}>
					<p>250 characters left</p>
					<button type="submit" className={style.commentSubmit}>
						Post Comment
					</button>
				</div>
			</form>
		</>
	);
}
