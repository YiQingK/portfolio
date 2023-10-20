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
                    <div className="flex  flex-col justify-center items-center">
                    <Image
                        src={BannerImage}
                        alt="banner image"
                        width={400}
                        height={171}
                        className="w-3/4 h-auto rounded-2xl "
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    <p>Event Banner</p>
                    </div>

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
                    <p>Have been primarily use to the simplistic graphic design style.
                    I had to understand compostions of more complicated/busy designs. I took inspiration from moodboards and material available online. H2Games designer's feedback also helped with this process.
                       </p>
                </Layout>
            </main>
        </>
    );
};

export default h2games;
