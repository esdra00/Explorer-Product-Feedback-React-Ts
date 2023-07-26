import {DocumentData, doc, getDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import EditIcon from "../../assets/shared/icon-edit-feedback.svg";
import GoBack from "../../components/Go Back Button/goBack";
import FormEdit from "../../components/forms/form edit/formEdit";
import {database} from "../../firebase/firebase";
import style from "./editFeedbackStyle.module.scss";

export default function EditFeedback() {
	const {id} = useParams() as {id: string};
	const [detail, setDetail] = useState<DocumentData | undefined>();

	useEffect(() => {
		const getDetail = async () => {
			const docSnap = await getDoc(doc(database, "productRequests", id));
			setDetail(docSnap.data());
		};
		getDetail();
	}, [id]);

	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<GoBack />
				<div className={style.form_w}>
					<img
						src={EditIcon}
						alt="plus icon"
						className={style.editIcon}
						height={56}
						width={56}
					/>
					<h1 className={style.title}>
						Editing "{detail ? detail.title : "Feedback"}"
					</h1>
					<FormEdit />
				</div>
			</div>
		</div>
	);
}
