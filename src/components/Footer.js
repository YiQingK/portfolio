import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
	return (
		<footer
			className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base
        "
		>
			<Layout className="py-8 flex items-center justify-around lg:flex-col lg:py-6">
				<span>{new Date().getFullYear} &copy; All Rights Reserved.</span>
				<div className="flex items-center lg:py-2">
					Coded and Designed with{" "}
					<span className="text-primary dark:text-primaryDark text-2xl px-1">&hearts;</span>
					by&nbsp;
					<Link href="/" className="underline underline-offset-2">
						YiQing
					</Link>
				</div>
				<Link href="/" target={"_blank"} className="underline underline-offset-2">
					Say Hello
				</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
