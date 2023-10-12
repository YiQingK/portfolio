import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import mainpic from "../../../public/images/LandingPage.jpg"

const socialhero = () => {
    return (
        <>
            <Head>
                <title> Yi Qing | Social Hero</title>
                <meta name="description" content="description"></meta>
            </Head>
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout>
                    <AnimatedText
                        text="Social Hero"
                        className="mb-4 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="items-center text-center mb-16">
                        <p>Ongoing Research Project at University of California, Santa Cruz</p>
                        <p>that started off as a mini project during 'Intro to Design Methods' class at UCSC, it expanded to a full-fledged research project under the guidance of Professor Kathryn Ringland.</p>
                        <p><span className="font-bold text-lg">Project Since:</span> Fall 2022</p>
                    </div>
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-8">
                            <p><span className="font-bold text-lg">Chapter 1: During 'Intro to Design Methods</span></p>
                            <p>Tasked to design something for a selected community within 2 weeks, a group of introverts(according to myer-brigs test) decided to create a mobile game(interactive prototype) that can help foster social courage which we named "Social Hero".</p>

                            <h2 className="font-bold uppercase text-lg my-4">Project Process</h2>
                            <ol className="list-decimal">
                                <li className="list-item">Brainstorm possible directions to take the project of 'designing for a selected community'</li>
                                <li className="list-item">Brainstorm features that might be part of the prototype</li>
                                <li className="list-item">Conduct interviews with potential users</li>
                                <li className="list-item">Design for a low-fidelity prototype guided by insights from interviews</li>
                                <li className="list-item">Iterate on designs through review with team members and professor for a high fidelity prototype</li>
                                <li className="list-item">Conduct user testing to identify any pain points and iterate on prototype for any final adjustments.</li>
                            </ol>

                        </div>
                        <div className="col-span-4">
                            <Image
                                src={mainpic}
                                alt="Final Prototype landing page"
                                className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <p className="text-center">Final Prototype Landing Page</p>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default socialhero;
