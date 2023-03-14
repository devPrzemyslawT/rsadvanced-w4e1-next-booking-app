import { useRouter } from "next/router";

function Post({ post }) {
	const router = useRouter();
	console.log(router);
	const slug = router.query.slug;
	return (
		<div>
			<h1>Post: #{post.id}</h1>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	);
}

export async function getServerSideProps({ params }) {
	// console.log(`Params: ${params}`);
	const postId = params.slug;
	// console.log(postId);
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);
	const data = await response.json();
	// console.log(data);

	return {
		props: {
			post: data,
		},
	};
}

export default Post;
