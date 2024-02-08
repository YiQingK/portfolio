import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import wireframe from "public/images/socialhero_wireframe.png";
import landingpage from "public/images/landingpage_phone.png";
import tavern1 from "public/images/tavern_phone.png";
import tavern2 from "public/images/tavernexpanded_phone.png";
import profile from "public/images/profile_phone.png";
import academy from "public/images/academy_phone.png";

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
					<div className="grid grid-cols-12 gap-12 gap-y-24">
						<div id="title " className="col-span-12">
							<h1>Social Hero </h1>
							<h2>Fostering socialization through mobile games</h2>
						</div>
						<div id="Research Findings" className="col-span-12">
							<h3>Research Findings</h3>
							<div className="flex mt-12 gap-12">
								<div className="w-[50%] text-center border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4">Community</h5>
									<p>Need for human connection</p>
									<p>Collaboration between users</p>
								</div>
								<div className="w-[50%] text-center border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4">Safety</h5>
									<p>Control of who they are interacting with</p>
									<p>Control of who can see their information</p>
								</div>
							</div>
							<div className="flex mt-12 gap-12">
								<div className="w-[50%] text-center border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4">Aesthetics</h5>
									<p>Reminiscent and colorful 8-bit art style</p>
									<p>World style differing from real life (Escapism)</p>
								</div>
								<div className="w-[50%] text-center border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4">User</h5>
									<p>Ability to express themselves</p>
									<p>Having a sense of accomplishment</p>
								</div>
							</div>
						</div>

						<div id="Finalized Features" className="col-span-12">
							<h3>Finalized Features</h3>
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
						<div id="wireframe" className="col-span-12">
							<h3 className="mt-4">Wireframe</h3>
							<Image src={wireframe} className="w-auto max-h-[700px] m-auto" />
						</div>
						<div id="usability" className="col-span-12">
							<h3 className="mt-4">Usability Testing</h3>
							<p></p>
						</div>
						<div id="hifiprototype" className="col-span-12">
							<h3 className="mt-4">High Fidelity Interactive Prototype</h3>
							<h4>Landing Page</h4>
							<p>The guide was added to help first time users better navigate the application.</p>
							<Image src={landingpage} className="w-auto max-h-[700px] m-auto" />
							<h4>Profile</h4>
							<p>
								Profile screen allows users to showcase their progress/achievements and customize their
								avatar, display name and biography.
							</p>
							<Image src={profile} className="w-auto max-h-[700px] m-auto" />
							<h4>Tavern (Online Forum)</h4>
							<p>
								Tavern was created as a place for all users to interact. Posts can be sorted and
								filtered accordingly and can be anonymized as well.
							</p>
							<div className="flex">
								<Image src={tavern1} className="w-auto max-h-[700px] m-auto" />
								<Image src={tavern2} className="w-auto max-h-[700px] m-auto" />
							</div>

							<h4>Academy Log</h4>
							<p>Academy log showcases achievements and tasks-related posts with in-game friends only.</p>
							<Image src={academy} className="w-auto max-h-[700px] m-auto" />
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default socialhero_p2;
