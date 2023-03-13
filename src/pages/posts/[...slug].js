import { useRouter } from "next/router";

function Post() {
	const router = useRouter();
	console.log(router);
	const slug = router.query.slug;
	return (
		<div>
			<h1>Post:{slug[0]}</h1>
			<p></p>
		</div>
	);
}

export default Post;
