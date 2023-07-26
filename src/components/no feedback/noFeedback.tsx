import ArrowIcon from "../../assets/shared/icon-plus.svg";
import EmptyImg from "../../assets/suggestions/illustration-empty.svg";
import style from "./noFeedbackStyle.module.scss";

export default function NoFeedback() {
	return (
		<div className={style.container}>
			<img src={EmptyImg} alt="Empty Illustration" height={136} width={129} />
			<div className={style.txt_w}>
				<h1>There is no feedback yet.</h1>
				<p>
					Got a suggestion? Found a bug that needs to be squashed? We love
					hearing about new ideas to improve our app.
				</p>
				<button className={style.addFeedback}>
					<img src={ArrowIcon} alt="" /> Add Feedback
				</button>
			</div>
		</div>
	);
}
