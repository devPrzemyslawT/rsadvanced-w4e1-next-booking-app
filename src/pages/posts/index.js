// import { useState, useEffect } from "react";
import Link from "next/link";
function Posts({ posts }) {
	// const [posts, setPosts] = useState([]);

	// useEffect(() => {
	// 	fetch("https://jsonplaceholder.typicode.com/posts")
	// 		.then(response => response.json())
	// 		.then(data => setPosts(data.slice(0, 10)))
	// 		// console.log(posts);
	// 		.catch(error => console.log(error));
	// }, []);

	return (
		<div>
			<h1>Posts:</h1>
			Nowy post:
			{posts &&
				posts.map(elem => (
					// console.log(`Title: ${elem.title}, body: ${elem.body}`);
					<div key={`post-${elem.id}`}>
						<Link href={`/posts/${elem.id}`}>
							<h3>{elem.title}</h3>
						</Link>
						<p>{elem.body}</p>
					</div>
				))}
		</div>
	);
}

export async function getStaticProps() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await response.json();

	return {
		props: {
			posts: data.slice(0, 10),
		},
	};
}

export default Posts;
