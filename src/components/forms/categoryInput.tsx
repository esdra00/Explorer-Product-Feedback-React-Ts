import style from "./form new/formStyle.module.scss";
export default function CategoryInput({
	change,
}: {
	change: React.ChangeEventHandler<HTMLSelectElement>;
}) {
	console.log(typeof change);

	return (
		<label htmlFor="category" className={style.label}>
			<span className={style.labelTxt}>
				<h4 className={style.labelTitle}>Category</h4>
				Choose a category for your feedback
			</span>
			<select id="category" name="category" onChange={change} required>
				<option value={"Feature"}>Feature</option>
				<option value={"UI"}>UI</option>
				<option value={"UX"}>UX</option>
				<option value={"Enhancement"}>Enhancement</option>
				<option value={"Bug"}>Bug</option>
			</select>
		</label>
	);
}
