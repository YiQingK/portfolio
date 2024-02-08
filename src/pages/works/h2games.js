import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import ShirtMockup from "public/images/H2games_shirtmockup.png";
import BannerMockup from "public/images/H2games_bannermockup.png";
import MainDesign from "public/images/H2_NYP.png";
import WebsiteDesign from "public/images/GAMEJAM Poster XS.png";

const h2games = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | H2 Games</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex items-center text-dark w-full min-h-screen dark:text-light">
				<Layout>
					<div className="justify-center items-center grid grid-cols-12 gap-12 md:gap-8">
						<div className="col-span-12">
							<h1>H2 Games Visual Design Work</h1>
						</div>
						<div className="col-span-6 md:col-span-12">
							<Image
								src={MainDesign}
								alt="Main Event Design"
								className="w-full h-auto rounded-xl "
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
							<p>Main Event design</p>
						</div>
						<div className="col-span-6 md:col-span-12">
							<Image
								src={ShirtMockup}
								alt="Mockup of Event Shirt"
								className="w-full h-auto rounded-xl "
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
							<p>Mockup of Event Shirt</p>
						</div>
						<div className="col-span-6 md:col-span-12">
							<Image
								src={BannerMockup}
								alt="Mockup of Retractable Banner"
								className="w-full h-auto rounded-xl "
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
							<p>Mockup of Event Retractable Banner</p>
						</div>
						<div className="col-span-6 md:col-span-12">
							<Image
								src={WebsiteDesign}
								alt="Event Website Design"
								className="w-full h-auto rounded-xl "
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
							<p>Event Website Design</p>
						</div>
						<div className="col-span-12"></div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default h2games;
