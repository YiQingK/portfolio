import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";

const socialhero_p2 = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | Social Hero App Creation</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex flex-col items-center  text-dark w-full min-h-screen dark:text-light">
				<Layout>
					<h5 className=" bg-primary dark:bg-primaryDark text-light inline p-1 rounded">UX Design</h5>{" "}
					<h5 className=" bg-primary dark:bg-primaryDark text-light inline p-1 rounded">Prototyping</h5>
					<div className="grid grid-cols-12 gap-12">
						<div className="col-span-12">
							<h1>Social Hero </h1>
							<h2>Fostering socialization through mobile games</h2>
							<ul className="list-disc marker:text-primary mt-8">
								<li className="list-item text-3xl font-display">Research Findings</li>
							</ul>
						</div>
						<div className="col-span-6 text-center border-2 border-dark rounded-2xl py-4">
							<h4 className="font-bold">Community</h4>
							<p>Need for human connection</p>
							<p>Collaboration between users</p>
						</div>
						<div className="col-span-6 text-center border-2 border-dark rounded-2xl py-4">
							<h4 className="font-bold">Safety</h4>
							<p>Control of who they are interacting with</p>
							<p>Control of who can see their information</p>
						</div>
						<div className="col-span-6 text-center border-2 border-dark rounded-2xl py-4">
							<h4 className="font-bold">Aesthetics</h4>
							<p>Reminiscent and colorful 8-bit art style</p>
							<p>World style differing from real life (Escapism)</p>
						</div>
						<div className="col-span-6 text-center border-2 border-dark rounded-2xl py-4">
							<h4 className="font-bold">User</h4>
							<p>Ability to express themselves</p>
							<p>Having a sense of accomplishment</p>
						</div>

						<div className="col-span-12">
							<ul className="list-disc marker:text-primary mt-8">
								<li className="list-item text-3xl font-display">Finalized Features</li>
							</ul>
							<ul className="list-disc">
								<li className="list-item">
									Separated spaces for close friends and all players with the option to be set
									anonymous
								</li>
								<li className="list-item">In-game chat for friends to communicate</li>
								<li className="list-item">
									Tasks linked to real-world actions which encourage social courage
								</li>
								<li className="list-item">
									A profile page to showcase player avatar and accomplishments
								</li>
								<li className="list-item">
									A shop where players can purchase items for character customization through in-game
									currency earned through tasks
								</li>
							</ul>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default socialhero_p2;
