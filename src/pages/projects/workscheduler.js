import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import calendar from "../../../public/images/Cal.jpg";
import Image from "next/image";


const workscheduler = () => {
    return (
        <>
            <Head>
                <title> Yi Qing | Social Hero</title>
                <meta name="description" content="description"></meta>
            </Head>
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout>
                    <AnimatedText
                        text="Work Scheduler App"
                        className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-8">
                        <p>This was a capstone project done in my final semester at USF sponsored by SF Dev Shop.</p>
                        <p><span className="font-bold text-lg">Project length:</span> ~3 months</p>
                        <p><span className="font-bold text-lg">Team members:</span> 4 (Kai BurkHolder, Gordon Mai, Serena Villenueva, Yi Qing Khoo(me))</p>
                        <p><span className="font-bold text-lg">My main role:</span> 1 of 2 members in-charge of frontend development</p>
                        <p><span className="font-bold text-lg">Problem:</span> Existing work scheduling system which was on a web-platform did not translate well to a mobile version which was hard for users to use on their phones.</p>
                        <p><span className="font-bold text-lg">Goal:</span> To create an improved form of our sponsor's current work scheduling system.</p>
                        <p><span className="font-bold text-lg">Results:</span> Created an easy to use cross-platform mobile application to help organise a company's work schedule. The app was created using React Native for a cross-platform UI which communicates with a back-end service built with Node.js and PostgreSQL.</p>

                        </div>
                        <div className="col-span-4">
                            <Image
                            src={calendar}
                            alt="calendar image"
                            className="w-full h-auto rounded-2xl"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="col-span-12">
                            <h2 className="font-bol uppercase text-lg">Design Process</h2>
                            <ol className="list-decimal">
                                <li className="list-item">Understand pain points of the existing work scheduling system</li>
                                <li className="list-item">Brainstorm ways to overcome pain points</li>
                                <li className="list-item">Program functionality for such ways</li>
                                <li className="list-item">Review with sponsor and iterate with feedback provided</li>
                            </ol>
                        </div>
                        
                    </div>
                    {/*
                    Process of design
                    */}
                </Layout>
            </main>
        </>
    );
};

export default workscheduler;