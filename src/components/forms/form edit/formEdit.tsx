import {deleteDoc, doc, updateDoc} from "firebase/firestore";
import {FormEvent, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {database} from "../../../firebase/firebase";
import {EditTypes} from "../../../types";
import CategoryInput from "../categoryInput";
import DescriptionInput from "../descriptionInput";
import StatusInput from "../statusInput";
import TitleInput from "../titleInput";
import style from "./formEditStyle.module.scss";

// fix : disable update button if input are empty
// fix : disable update button if input are empty

export default function FormEdit() {
	const navigate = useNavigate();
	const {id} = useParams() as {id: string};
	const [submitting, setSubmitting] = useState(false);
	const [edit, setEdit] = useState<EditTypes>({} as EditTypes);

	const feedbackDocRef = doc(database, "productRequests", id);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			setSubmitting(true);
			await updateDoc(feedbackDocRef, edit);
		} catch (err) {
			console.log(err);
		} finally {
			setSubmitting(false);
			navigate("/");
		}
	};

	const handleDelete = async () => {
		try {
			setSubmitting(true);
			await deleteDoc(feedbackDocRef);
		} catch (err) {
			console.log(err);
		} finally {
			setSubmitting(false);
			navigate("/");
		}
	};

	const handleCancel = () => {
		navigate(`/detail/${id}`);
	};

	const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEdit((prevState) => ({...prevState, title: e.target.value}));
	};

	const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		setEdit((prevState) => ({...prevState, category: e.target.value}));
	};

	const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		setEdit((prevState) => ({...prevState, status: e.target.value}));
	};

	const handleChangeDescription = (
		e: React.ChangeEvent<HTMLTextAreaElement>
	): void => {
		setEdit((prevState) => ({...prevState, description: e.target.value}));
	};

	return (
		<form
			onSubmit={(e) => {
				handleSubmit(e);
			}}
		>
			<TitleInput change={handleChangeTitle} />
			<CategoryInput change={handleChangeCategory} />
			<StatusInput change={handleChangeStatus} />
			<DescriptionInput change={handleChangeDescription} />
			<div className={style.buttons}>
				<button
					type="button"
					className={style.delete}
					onClick={handleDelete}
					disabled={submitting}
				>
					<h4>Delete</h4>
				</button>
				<div>
					<button
						type="button"
						className={style.cancel}
						onClick={handleCancel}
						disabled={submitting}
					>
						<h4>Cancel</h4>
					</button>
					<button
						type="submit"
						className={style.submit}
						disabled={submitting}
					>
						<h4>Save Changes</h4>
					</button>
				</div>
			</div>
		</form>
	);
}
