import React from "react";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/work/h2games.jpg";
import WSpic from "../../public/images/wspic.jpg";
import socialheropic from "../../public/images/socialheropic.png";
import nvidiapic from "../../public/images/nvidialogo.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const Project = ({ title, type, img, link, summary }) => {
	return (
		<article
			className="w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative
        dark:border-light dark:bg-dark xs:p-4"
		>
			<div
				className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl
       		bg-dark dark:bg-light
    		md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            "
			/>
			<div className="w-full overflow-hidden rounded-lg">
				<FramerImage
					src={img}
					alt={title}
					className="w-full h-auto"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
				/>
			</div>
			<div className="w-full flex flex-col items-start justify-between mt-4">
				<span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
					{type}
				</span>
				<h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
				<p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
				<Link
					href={link}
					target="_self"
					className="rounded-lg bg-dark text-light p-1 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
				>
					View Work
				</Link>
			</div>
		</article>
	);
};

const Projects = () => {
	return (
		<div className="grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
			<div className="col-span-6 md:col-span-12 ">
				<Project
					title="Social Hero: Understanding and designing a virtual space"
					img={socialheropic}
					link="/works/socialhero"
					type="UI UX Research and Design Project"
					summary="Research project that seeks to understand how a virtual playful environment can foster social interactions which we dubbed 'Social Hero'."
				/>
			</div>
			<div className="col-span-6 md:col-span-12">
				<Project
					title="Trustworthy and Assistive workplace AI Chatbot"
					img={nvidiapic}
					link="/works/assistantchatbot"
					type="UI UX Research and Design Project"
					summary="Graduate capstone project with Nvidia that seeks to design a trustworthy and assistive AI chatbot through prompt engineering and UX design."
				/>
			</div>
			<div className="col-span-6 md:col-span-12 ">
				<Project
					title="H2 Games Design Work"
					img={project1}
					link="/works/h2games"
					type="Client Visual Design Work"
					summary="Design work for H2 Games GameJam event with Nanyang Polytechnic (NYP) in Singapore."
				/>
			</div>
			<div className="col-span-6 md:col-span-12 ">
				<Project
					title="Work Scheduler Application"
					img={WSpic}
					link="/works/workscheduler"
					type="Software Development Project"
					summary="Undergraduate Capstone Project where we created cross-platform mobile application to help organise a company's work schedule."
				/>
			</div>
		</div>
	);
};

export default Projects;
