import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/portfolio_small.jpg";
import Image from "next/image";

const about = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | About Page</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex w-full flex-col items-center justify-center dark:text-light">
				<Layout>
					<div className="grid w-full grid-cols-12 gap-16 gap-y-8 sm:gap-8">
						<div className="col-span-8 items-start md:order-2 md:col-span-12">
							<h1>About Me</h1>
							<h2 className="my-4 uppercase text-dark/75 dark:text-light/75">
								Hi, I'm Yi Qing.
								<br />
								You can also call me Haru.
							</h2>
							<p>I am a UI UX designer from Singapore.</p>
							<p>
								My experience in UI UX design comes from projects and work in university while my visual
								design skills come from being self-taught through my experience running my own small
								business and freelance work.
							</p>
						</div>
						<div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark md:order-1 md:col-span-12">
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
							<Image
								src={profilePic}
								alt="image"
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						{/*						<div className="col-span-12">
							<p>Here are some of my interest, if you are interested :)</p>
							<p className="text-primary underline underline-offset-8 font-medium">MUSIC</p>
							<ul className="list-disc">
								<li className="list-item"></li>
							</ul>
							<p className="text-primary underline underline-offset-8 font-medium">GAMES</p>
						</div> */}
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
