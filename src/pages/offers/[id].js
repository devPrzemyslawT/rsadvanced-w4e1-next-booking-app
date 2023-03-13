import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function Offer() {
	const router = useRouter();
	// const { idValue, setIdValue } = useState({});
	const pid = router.query.id;

	// // let { pid } = "";
	// useEffect(() => {
	// 	if (!router.isReady) return;

	// 	console.log(pid);
	// 	// setIdValue(pid);
	// 	// console.log(idValue);
	// 	// codes using router.query
	// }, [router.isReady]);

	return (
		<div>
			<p>Offer id: {pid} </p>
		</div>
	);
}

export default Offer;
