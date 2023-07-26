import style from "./form new/formStyle.module.scss";

export default function TitleInput({change}: {change: React.ChangeEventHandler<HTMLInputElement>}) {
	return (
		<label htmlFor="title" className={style.label}>
			<span className={style.labelTxt}>
				<h4 className={style.labelTitle}>Feedback Title</h4>
				Add a short, descriptive headline
			</span>
			<input
				className={style.titleInput}
				type="text"
				id="title"
				name="title"
				onChange={change}
				required
			/>
		</label>
	);
}
