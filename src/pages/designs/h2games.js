import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";

const h2games = () => {
    return (
        <>
            <Head>
                <title> Yi Qing | H2 Games</title>
                <meta name="description" content="description"></meta>
            </Head>
            <main>
                <Layout></Layout>
            </main>
        </>
    );
};

export default h2games;
