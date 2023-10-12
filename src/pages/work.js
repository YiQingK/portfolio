import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/work/h2games.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article
            className="w-full flex items-center justify-between rounded-3xl 
        border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl
        dark:border-light dark:bg-dark
        lg:flex-col lg:p-8 xS:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl
            bg-dark dark:bg-light
            xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
            />
            <Link
                href={link}
                target="_self"
                className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
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
                <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
                    {type}
                </span>
                <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
                    {title}
                </h2>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <Link
                        href={link}
                        target="_self"
                        className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base">
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, img, link, github }) => {
    return (
        <article
            className="w-full flex flex-col items-start justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative
        dark:border-light dark:bg-dark xs:p-4">
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl
             bg-dark dark:bg-light
             md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
             "
            />
            <Link
                href={link}
                target="_blank"
                className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage
                    src={img}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className="w-fullflex flex-col items-start justify-between mt-4">
                <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
                        {title}
                    </h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link
                        href={link}
                        target="_blank"
                        className="text-lg font-semibold underline md:text-base">
                        Visit
                    </Link>
                </div>
            </div>
        </article>
    );
};

const projects = () => {
    return (
        <>
            <Head>
                <title> Yi Qing | Works Page</title>
                <meta name="description" content="description"></meta>
            </Head>
            <main className="w-full pb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text="Work"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="H2 Games Design Work"
                                img={project1}
                                link="/work/h2games"
                                github="/"
                                type="Event Design Work"
                                summary="Design work for H2 Games GameJam event with Nanyang Polytechnic (NYP) in Singapore."
                            />
                        </div>
                        {/*<div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Design Project 1"
                                img={project1}
                                link="/"
                                github="/"
                                type="project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            {" "}
                            <Project
                                title="Design Project 2"
                                img={project1}
                                link="/"
                                github="/"
                                type="project"
                            />
                        </div>*/}
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default projects;