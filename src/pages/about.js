import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/portfolio_small.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Education from "@/components/Education";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on("change", (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value]);

	return <span ref={ref}></span>;
};

const about = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | About Page</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex w-full flex-col items-center justify-center dark:text-light">
				<Layout className="pt-16">
					<h1>About Me</h1>
					<div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
						<div className="col-span-5 flex flex-col items-start xl:col-span-4 md:order-2 md:col-span-8">
							<h2 className="mb-4 uppercase text-dark/75 dark:text-light/75">
								Hi, I'm Yi Qing Khoo. You can also call me Haru.
							</h2>
							<p>I am a UI UX designer from Singapore, currently based in Cupertino, California.</p>
							<p>
								My experience in UI UX design comes from projects and work in university while my visual
								design skills come from being self-taught through my experience running my own small
								business and freelance work.
							</p>
							{/*
														<Education />
							<p className="font-medium my-4">
                                I believe that design is about more than just
                                making things look pretty – it's about solving
                                problems and creating intuitive, enjoyable
                                experiences for users.
                            </p>
                            <p className="font-medium">
                                Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to
                                design excellence and user-centered thinking to
                                every project I work on. I look forward to the
                                opportunity to bring my skills and passion to
                                your next project.
                            </p>*/}
							<div className=" flex items-center self-start mt-4 lg:self-center">
								<Link
									href="/Resume.pdf"
									target={"_blank"}
									className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                                hover:bg-light hover:text-dark 
                                border-2 border-solid border-transparent hover:border-dark
                                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                                md:p-2 md:px-4 md:text-base 
                                "
								>
									Resume <LinkArrow className={"w-6 ml-1"} />
								</Link>
								<Link
									href="mailto:khooyiqing@gmail.com"
									target={"_blank"}
									className="ml-4 text-lg font-medium capitalize text-dark dark:text-light underline md:text-base"
								>
									Contact
								</Link>
							</div>
						</div>
						<div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
							<Image
								src={profilePic}
								alt="image"
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						{/*<div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                    <AnimatedNumbers value={4} />+
                                </span>
                                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                                    satisfied clients
                                </h2>
                            </div>
                        </div>*/}
					</div>

					{/*<Skills />
                    <Experience />*/}
				</Layout>
			</main>
		</>
	);
};

export default about;
