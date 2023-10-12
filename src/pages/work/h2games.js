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
                    <p className="text-lg font-bold uppercase">
                        Work Description
                    </p>
                    <p>
                        To create material for GameJam event held by H2Games and Nanyang Polytechnic. Material include event banner, website page, event t-shirt design.
                    </p>
                    <p>
                        Presented with previous year's work, I created the draft of the event banner. 
                    </p>
                </Layout>
            </main>
        </>
    );
};

export default h2games;
