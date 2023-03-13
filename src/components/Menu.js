import Link from "next/link";
// import React from "react";
import { forwardRef } from "react";
import { useRouter } from "next/router";
// eslint-disable-next-line react/display-name
const NavLink = forwardRef(({ href, onClick, children }, ref) => {
	const router = useRouter();
	console.log(router);
	return (
		<a
			href={href}
			onClick={onClick}
			ref={ref}
			style={{ color: router.pathname === href ? "red" : "white" }}>
			{children}
		</a>
	);
});

const Menu = () => {
	return (
		<nav>
			<Link href='/' legacyBehavior passHref>
				<NavLink legacyBehavior>Home</NavLink>
			</Link>
			<Link href='/about' legacyBehavior passHref>
				<NavLink legacyBehavior>About</NavLink>
			</Link>
			<Link href='/contact' legacyBehavior passHref>
				<NavLink legacyBehavior>Contact</NavLink>
			</Link>
		</nav>
	);
};

export default Menu;
