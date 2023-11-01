import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { NameLogo } from "./Icons";

const MotionLink = motion(Link);

const Logo = () => {
	return (
		<div className="flex items-center justify-center mt-2">
			<MotionLink
				href="/"
				className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-dark dark:border-light"
				whileHover={{
					backgroundColor: ["#121212", "#FFBE0B", "#FB5607", "#FF006E", "#8338EC", "#3A86FF", "#121212"],
					transition: { duration: 1, repeat: Infinity },
				}}
			>
				<NameLogo className="text-light " />
			</MotionLink>
		</div>
	);
};

export default Logo;
