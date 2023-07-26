import {Link} from "react-router-dom";
import ArrowLeft from "/src/assets/shared/icon-arrow-left.svg";
import style from "./goBackStyle.module.scss";

export default function GoBack() {
	return (
		<Link to={"/"} className={style.goBack}>
			<img src={ArrowLeft} alt="Go back arrow" />
			<span>Go back</span>
		</Link>
	);
}
