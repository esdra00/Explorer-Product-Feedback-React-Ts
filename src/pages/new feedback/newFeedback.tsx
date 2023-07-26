import PlusIcon from "../../assets/shared/icon-plus.svg";
import Form from "../../components/forms/form new/form";
import GoBack from "../../components/Go Back Button/goBack";
import style from "./newFeedback.module.scss";

export default function NewFeedback() {
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<GoBack />
				<div className={style.form}>
					<img
						src={PlusIcon}
						alt="plus icon"
						className={style.plusIcon}
						height={56}
						width={56}
					/>
					<h1 className={style.title}>Create New Feedback</h1>
					<Form />
				</div>
			</div>
		</div>
	);
}
