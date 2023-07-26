import {useState} from "react";
import IconOpen from "../../assets/shared/mobile/icon-close.svg";
import IconClose from "../../assets/shared/mobile/icon-hamburger.svg";

import CategoryFilters from "./category filter/categoryFilter";
import style from "./menuStyle.module.scss";
import Roadmap from "./roadmap/roadmap";

export default function Menu() {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<div className={style.container}>
			<div className={style.card}>
				<div>
					<h2>Frontend Mentor</h2>
					<h4>Feedback Board</h4>
				</div>
				<div className={style.menuButton} onClick={handleClick}>
					{open ? <img src={IconOpen} /> : <img src={IconClose} />}
				</div>
			</div>
			<CategoryFilters />
			<Roadmap />
			<div className={`${style.sidebar} ${open ? style.active : null}`}>
				<CategoryFilters />
				<Roadmap />
			</div>
		</div>
	);
}
