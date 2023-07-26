import {OrderByDirection} from "firebase/firestore";
import {createContext, useState} from "react";
import Bar from "../../components/feedback bar/feedbackBar";
import SuggestionCard from "../../components/feedback card/feedbackCard";
import Menu from "../../components/menu/menu";
import NoFeedback from "../../components/no feedback/noFeedback";
import {useFetch} from "../../hooks/useFetch";
import {CategoryContextProps, FilterContextProps} from "../../types";
import style from "./homepageStyle.module.scss";

export const CategoryContext = createContext<CategoryContextProps | "all">("all");

export const FilterContext = createContext<FilterContextProps | "desc">("desc");

export default function Homepage() {
	const [category, setCategory] = useState("all");
	const [filter, setFilter] = useState<OrderByDirection>("desc");
	const {data} = useFetch(filter);

	return (
		<CategoryContext.Provider value={{category, setCategory}}>
			<FilterContext.Provider value={{filter, setFilter}}>
				<div className={style.container}>
					<Menu />
					<div className={style.wrapper}>
						<Bar suggestions={data?.length || 0} />
						{data?.length == 0 ? (
							<NoFeedback />
						) : (
							data?.map((i) => {
								return category == "all" ||
									category == i.category ? (
									<SuggestionCard
										title={i.title}
										category={i.category}
										upvotes={i.upvotes}
										description={i.description}
										comments={i.comments?.length}
										id={i.id}
										key={i.id}
									/>
								) : null;
							})
						)}
					</div>
				</div>
			</FilterContext.Provider>
		</CategoryContext.Provider>
	);
}