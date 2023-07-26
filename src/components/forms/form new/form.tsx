import {doc, setDoc} from "firebase/firestore";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {database} from "../../../firebase/firebase";
import {NewFeedbackTypes} from "../../../types";
import CategoryInput from "../categoryInput";
import DescriptionInput from "../descriptionInput";
import TitleInput from "../titleInput";
import style from "./formStyle.module.scss";

export default function Form() {
	const navigate = useNavigate();
	const [submitting, setSubmitting] = useState(false);
	// generate new id for new feedback
	const [id] = useState(Math.floor(Math.random() * 500) + 20);
	const [newFeedBack, setNewFeedBack] = useState<NewFeedbackTypes>({
		category: "",
		description: "",
		title: "",
		id: id,
		status: "Suggestion",
		upvotes: 0,
	});

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setSubmitting(true);
			await setDoc(doc(database, "productRequests", id.toString()), newFeedBack);
		} catch (err) {
			console.log(err);
		} finally {
			setSubmitting(false);
			navigate("/");
		}
	};

	const handleCancel = () => {
		navigate("/");
	};

	const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNewFeedBack((prevState) => ({...prevState, title: e.target.value}));
	};

	const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		setNewFeedBack((prevState) => ({...prevState, category: e.target.value}));
	};

	const handleChangeDescription = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	): void => {
		setNewFeedBack((prevState) => ({...prevState, description: e.target.value}));
	};

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<TitleInput change={handleChangeTitle} />
			<CategoryInput change={handleChangeCategory} />
			<DescriptionInput change={handleChangeDescription} />
			<div className={style.buttons}>
				<button
					type="button"
					className={style.cancel}
					onClick={handleCancel}
					disabled={submitting}
				>
					<h4>Cancel</h4>
				</button>
				<button type="submit" className={style.submit} disabled={submitting}>
					<h4>Update feedback</h4>
				</button>
			</div>
		</form>
	);
}
