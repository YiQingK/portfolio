import "@/styles/globals.css";
import {Karla, Inconsolata } from "next/font/google";

import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const inconsolata = Inconsolata({
    subsets: ["latin"],
    variable: '--font-inconsolata',
    display: 'swap',
});

const karla = Karla({
    subsets: ["latin"],
    variable: '--font-sintony',
        display: 'swap',

});

export default function App({ Component, pageProps }) {
    const router = useRouter();
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main
                className={`${karla.variable} ${inconsolata.variable} bg-light dark:bg-dark w-full min-h-screen`}>
                <NavBar />
                <AnimatePresence mode="wait">
                    <Component key={router.asPath} {...pageProps} />
                </AnimatePresence>
            </main>
            <Footer />
        </>
    );
}
