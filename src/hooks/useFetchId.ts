import {DocumentData, doc, getDoc} from "firebase/firestore";
import {useEffect, useState} from "react";
import {database} from "../firebase/firebase";

export function useFetchID(id: string) {
	const [data, setData] = useState<DocumentData | undefined>();

	useEffect(() => {
		const fetch = async () => {
			const docSnap = await getDoc(doc(database, "productRequests", id));
			setData(docSnap.data());
		};
		fetch();
	}, [id]);

	return {data};
}
