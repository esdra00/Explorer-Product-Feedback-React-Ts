import {OrderByDirection} from "firebase/firestore";
import {useContext} from "react";
import {Link} from "react-router-dom";
import IconPlus from "../../assets/shared/icon-plus.svg";
import IconSuggestion from "../../assets/suggestions/icon-suggestions.svg";
import {FilterContext} from "../../pages/homepage/homepage";
import {FilterContextProps} from "../../types";
import style from "./feedbackBarStyle.module.scss";

export default function Bar({suggestions}: {suggestions: number}) {
	const {setFilter} = useContext(FilterContext) as FilterContextProps;

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(e.currentTarget.value as OrderByDirection);
	};

	return (
		<section className={style.container}>
			<header className={style.title}>
				<img src={IconSuggestion} alt="" width={23} height={24} />
				<h3>{suggestions} Suggestions</h3>
			</header>
			<div className={style.filter}>
				Sort by:{" "}
				<select
					onChange={(e) => {
						handleChange(e);
					}}
				>
					<option value={"desc"}>Most Upvotes</option>
					<option value={"asc"}>Least Upvotes</option>
					<option>Most Comments</option>
					<option>Least Comments</option>
				</select>
			</div>
			<Link to={"/new"} className={style.cta}>
				<img src={IconPlus} alt="Add Feedback" />
				<span>Add Feedback</span>
			</Link>
		</section>
	);
}
