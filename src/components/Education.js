import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
	const ref = useRef(null);
	return (
		<li
			ref={ref}
			className="my-4 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
		>
			<LiIcon reference={ref} />
			<motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
				<h3 className="capitalize font-bold text-xl xs:text-lg">{type}</h3>
				<span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
					{time} | {place}
				</span>
				<p className="font-medium w-full md:text-sm">{info}</p>
			</motion.div>
		</li>
	);
};

const Education = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});
	return (
		<div>
			<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Education</h2>

			<div ref={ref} className="mx-auto relative w-full">
				{/*<motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-[20px] top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
    />*/}
				<ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
					<Details
						type="Bachelor Of Science In Computer Science"
						time="2019-2022"
						place="University of San Francisco"
						info="Relevant Skills: Software programming, Website Development"
					/>
					<Details
						type="Masters of Science in Human Computer Interaction"
						time="2022-2023"
						place="University of California, Santa Cruz"
						info="Relevant Skills: Figma, UX Research, Usability Testing, UX Design"
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
