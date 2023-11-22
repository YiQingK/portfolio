import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/work/h2games.jpg";
import WSpic from "../../public/images/wspic.jpg";
import socialheropic from "../../public/images/socialheropic.png";
import nvidiapic from "../../public/images/nvidialogo.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link }) => {
	return (
		<article
			className="w-full flex items-center justify-between rounded-3xl 
        border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl
        dark:border-light dark:bg-dark
        lg:flex-col lg:p-8 xS:rounded-2xl xs:rounded-br-3xl xs:p-4
        "
		>
			<div
				className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl
            bg-dark dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
			/>
			<Link href={link} target="_self" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
				<FramerImage
					src={img}
					alt={title}
					className="w-full h-auto"
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					priority
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
				/>
			</Link>
			<div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
				<span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
				<h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
				<p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
				<div className="mt-2 flex items-start">
					<Link
						href={link}
						target="_self"
						className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
					>
						Visit Project
					</Link>
				</div>
			</div>
		</article>
	);
};

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
					Visit
				</Link>
			</div>
		</article>
	);
};

const Project2 = ({ title, type, img, link1, link2, summary }) => {
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
				<div className="flex flex-row">
					<Link
						href={link1}
						target="_self"
						className=" mx-1 rounded-lg bg-dark text-light p-1 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
					>
						Part 1
					</Link>
					<Link
						href={link2}
						target="_self"
						className=" mx-1 rounded-lg bg-dark text-light p-1 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
					>
						Part 2
					</Link>
				</div>
			</div>
		</article>
	);
};

const Projects = () => {
	return (
		<div className="grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
			<div className="col-span-6 ">
				<Project2
					title="Social Hero"
					img={socialheropic}
					link1="/works/socialhero"
					link2="/works/socialhero_p2"
					type="UI UX Research and Design Project"
					summary="Ongoing research project that seeks to understand how a virtual playful environment can foster social interactions which we dubbed 'Social Hero'."
				/>
			</div>
			<div className="col-span-6">
				<Project
					title="Elevating AI Chatbot"
					img={nvidiapic}
					link="/Nvidia_TrustGPT_Final.pdf"
					type="UI UX Research and Design Project"
					summary="Ongoing graduate capstone project with Nvidia that seeks to design a trustworthy AI chatbot through prompt engineering and UX design."
				/>
			</div>
			<div className="col-span-6 ">
				<Project
					title="H2 Games Design Work"
					img={project1}
					link="/works/h2games"
					type="Client Visual Design Work"
					summary="Design work for H2 Games GameJam event with Nanyang Polytechnic (NYP) in Singapore."
				/>
			</div>
			<div className="col-span-6 ">
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
