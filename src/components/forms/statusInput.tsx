import style from "./form new/formStyle.module.scss";

export default function StatusInput({
	change,
}: {
	change: React.ChangeEventHandler<HTMLSelectElement>;
}) {
	return (
		<label htmlFor="status" className={style.label}>
			<span className={style.labelTxt}>
				<h4 className={style.labelTitle}>Status</h4>
				Change feature state
			</span>
			<select id="status" name="status" onChange={change} required>
				<option value={"Suggestion"}>Suggestion</option>
				<option value={"Planned"}>Planned</option>
				<option value={"In-Progress"}>In-Progress</option>
				<option value={"Live"}>Live</option>
			</select>
		</label>
	);
}
