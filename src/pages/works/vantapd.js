import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import DiscoCrewLogo from "public/images/discocrewlogo.jpeg";
import MerryKrisis from "public/images/merrykrisis.png";

const vantapd = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | Vantacrew Project Department</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex items-center text-dark w-full min-h-screen dark:text-light">
				<Layout>
					<div className="justify-center items-center grid grid-cols-12 gap-12 md:gap-8">
						<div className="col-span-12">
							<h1>Vantacrew Project Department Design Work</h1>
						</div>
						<div className="col-span-12">
							<h2>Merry Krisis cookbook design</h2>
							<h4>Overview:</h4>
							<p>In-charge of layout design of recipe pages (total 15 recipes, 34 pages)</p>
							<p>
								Responsibilites include creating main graphic (banner) for recipe page, ensuring
								readbility and consistency of text in the recipe and general cohesion of various page
								elements like mini character artwork and main dish artwork.
							</p>
						</div>
						<div className="col-span-12">
							<Image src={MerryKrisis} alt="Extracted example of recipe page design" className="w-auto" />
							<p className="text-center">Example Recipe Page</p>
						</div>
						<div className="col-span-12">
							<h2>Disco Crew Trivia Bash Logo Design</h2>
							<h4>Overview:</h4>
							<p>In-charge of game logo design</p>
							<p>
								Created draft logos based on brief given by project leads which were later iterated and
								refined to the final design.
							</p>
						</div>
						<div className="col-span-12">
							<Image
								src={DiscoCrewLogo}
								alt="Disco Crew Trivia Bash Logo"
								className="w-1/2 h-auto rounded-xl m-auto md:w-full "
								priority
								sizes="(max-width: 1200px) 50vw, 33vw"
							/>
							<p className="text-center">Final Logo</p>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default vantapd;
