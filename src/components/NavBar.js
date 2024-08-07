import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
	const router = useRouter();

	return (
		<Link href={href} className={`${className} relative group`}>
			{title}
			<span
				className={`h-[1px] inline-block bg-dark dark:bg-light
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition=[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"} `}
			>
				&nbsp;
			</span>
		</Link>
	);
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
	const router = useRouter();
	const handleClick = () => {
		toggle();
		router.push(href);
	};

	return (
		<button
			href={href}
			className={`${className} relative group text-light dark:text-dark my-2 font-display`}
			onClick={handleClick}
		>
			{title}
			<span
				className={`h-[1px] inline-block bg-light dark:bg-dark
            absolute left-0 -bottom-0.5 
            group-hover:w-full transition=[width] ease duration-300
            ${router.asPath === href ? "w-full" : "w-0"} `}
			>
				&nbsp;
			</span>
		</button>
	);
};

const NavBar = () => {
	const [mode, setMode] = useThemeSwitcher();
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
			<button className="flex-col items-center justify-center hidden lg:flex" onClick={handleClick}>
				<span
					className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out
                    ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 transition-all duration-300 ease-out
                    ${isOpen ? "opacity-0" : "opacity-100"}`}
				></span>
				<span
					className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out
                    ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}
				></span>
			</button>
			<div className="w-full flex items-center justify-between lg:hidden">
				<nav>
					<CustomLink href="/" title="Work" className="mr-4 font-display" />
					<CustomLink href="/Resume.pdf" title="Resume" className="mx-4 font-display" />
					<CustomLink href="/about" title="About" className="ml-4 font-display" />
				</nav>
				<nav className=" flex items-center justify-center flex-wrap">
					<motion.a
						href="https://github.com/YiQingK"
						target={"_blank"}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="w-7 mx-3"
					>
						<GithubIcon />
					</motion.a>
					<motion.a
						href="https://www.linkedin.com/in/khooyiqing/"
						target={"_blank"}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.9 }}
						className="w-7 ml-3"
					>
						<LinkedInIcon />
					</motion.a>
					<button
						onClick={() => setMode(mode === "light" ? "dark" : "light")}
						className={`ml-6 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
					>
						{mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
					</button>
				</nav>
			</div>
			{isOpen ? (
				<motion.div
					initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
					animate={{ scale: 1, opacity: 1 }}
					className="min-w-[70vw] flex flex-col items-center z-30 justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
				>
					<nav className="flex flex-col items-center justify-center ">
						<CustomMobileLink href="/" title="Work" toggle={handleClick} />
						<CustomMobileLink href="/Resume.pdf" title="Resume" toggle={handleClick} />
						<CustomMobileLink href="/about" title="About" toggle={handleClick} />
					</nav>
					<nav className=" flex items-center justify-center flex-wrap mt-2">
						<motion.a
							href="https://github.com/YiQingK"
							target={"_blank"}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className="w-7 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
						>
							<GithubIcon />
						</motion.a>
						<motion.a
							href="https://www.linkedin.com/in/khooyiqing/"
							target={"_blank"}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.9 }}
							className="w-7 ml-3 sm:mx-1"
						>
							<LinkedInIcon />
						</motion.a>
						<button
							onClick={() => setMode(mode === "light" ? "dark" : "light")}
							className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                    `}
						>
							{mode === "dark" ? (
								<SunIcon className={"fill-dark"} />
							) : (
								<MoonIcon className={"fill-dark"} />
							)}
						</button>
					</nav>
				</motion.div>
			) : null}

			<div className="absolute left-[50%] top-2 translate-x-[-50%]">
				<Logo />
			</div>
		</header>
	);
};

export default NavBar;
