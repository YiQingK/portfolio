import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import BannerImage from "../../../public/images/work/h2gamesbanner.jpg";

const h2games = () => {
    return (
        <>
            <Head>
                <title> Yi Qing | H2 Games</title>
                <meta name="description" content="description"></meta>
            </Head>
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout>
                    <Image
                        src={BannerImage}
                        alt="banner image"
                        width={400}
                        height={171}
                        className="w-full h-auto rounded-2xl"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <h2 className="text-lg font-bold uppercase">
                        Work Description
                    </h2>
                    <p>
                        To create material for GameJam event held by H2Games and Nanyang Polytechnic. Material include event banner, website page, event t-shirt design.
                    </p>
                    <h2 className="text-lg font-bold uppercase">Process</h2>
                    <p>
                        Referencing previous event design style, I created the draft of the event banner. 
                    </p>
                    <h2 className="text-lg font-bold uppercase">Challenges Faced</h2>
                    <p>Have been primarily use to the simplistic graphic design style of the west but as a chinese company, they had a different style which is the more complicated style. I had to learn to adjust in how a complicated design should be structurerd. The help from H2 Games' inhouse designer helped to guide me through this process.</p>
                </Layout>
            </main>
        </>
    );
};

export default h2games;
