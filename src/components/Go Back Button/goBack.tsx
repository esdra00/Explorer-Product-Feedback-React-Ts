import {Link} from "react-router-dom";
import style from "./goBackStyle.module.scss";
import ArrowLeft from "/src/assets/shared/icon-arrow-left.svg";

export default function GoBack() {
	return (
		<Link to={"/Explorer-Product-Feedback-React-Ts/"} className={style.goBack}>
			<img src={ArrowLeft} alt="Go back arrow" />
			<span>Go back</span>
		</Link>
	);
}
