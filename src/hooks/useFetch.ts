import {
	DocumentData,
	OrderByDirection,
	collection,
	getDocs,
	orderBy,
	query,
} from "firebase/firestore";
import {useEffect, useState} from "react";
import {database} from "../firebase/firebase";

export function useFetch(filter: OrderByDirection) {
	const [data, setData] = useState<DocumentData[]>([]);

	useEffect(() => {
		const fetch = async () => {
			const dataArr: DocumentData[] = [];
			const q = query(
				collection(database, `productRequests`),
				orderBy("upvotes", `${filter}`)
			);
			const querySnapshot = await getDocs(q);

			querySnapshot.forEach((doc) => {
				dataArr.push(doc.data());
			});

			setData(dataArr);
		};
		fetch();
	}, [filter]);

	return {data};
}
