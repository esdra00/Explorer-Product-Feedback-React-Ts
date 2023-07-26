import style from "./form new/formStyle.module.scss";

export default function DescriptionInput({
	change,
}: {
	change: React.ChangeEventHandler<HTMLTextAreaElement>;
}) {
	return (
		<label htmlFor="description" className={style.label}>
			<span className={style.labelTxt}>
				<h4 className={style.labelTitle}>Feedback Detail</h4>
				Include any specific comments on what should be improved, added, etc.
			</span>
			<textarea
				id="description"
				name="description"
				onChange={change}
				required
			></textarea>
		</label>
	);
}
