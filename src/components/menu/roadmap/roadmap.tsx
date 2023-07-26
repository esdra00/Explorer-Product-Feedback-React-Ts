import style from "./roadmapStyle.module.scss";

export default function Roadmap() {
	return (
		<div className={style.container}>
			<div className={style.title}>
				<h3>Roadmap</h3>
				<span>
					<a href="#" className={style.link}>View</a>
				</span>
			</div>
			<ul className={style.list}>
				<li>
					<div className={style.circle1}></div>
					<p>Planned</p>
					<span>2</span>
				</li>
				<li>
					<div className={style.circle2}></div>
					<p>In-Progress</p>
					<span>3</span>
				</li>
				<li>
					<div className={style.circle3}></div>
					<p>Live</p>
					<span>1</span>
				</li>
			</ul>
		</div>
	);
}
