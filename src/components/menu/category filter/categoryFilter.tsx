import {useContext} from "react";
import {CategoryContext} from "../../../pages/homepage/homepage";
import {CategoryContextProps} from "../../../types";
import style from "./categoryFilterStyle.module.scss";

export default function CategoryFilters() {
	const categories: string[] = ["all", "UX", "UI", "bug", "enhancement", "feature"];
	const {category, setCategory} = useContext(CategoryContext) as CategoryContextProps;

	const handleClick = (e: React.MouseEvent<HTMLInputElement>): void => {
		setCategory(e.currentTarget.value);
	};

	return (
		<ul className={style.list}>
			{categories.map((cat) => {
				return (
					<li
						className={`${category == cat ? style.active : null} ${
							style.listItem
						}`}
						key={cat}
					>
						<input
							type="button"
							className={style.filter}
							value={cat}
							onClick={(e) => {
								handleClick(e);
							}}
						/>
					</li>
				);
			})}
		</ul>
	);
}
