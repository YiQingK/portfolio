import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import habiticapic from "../../../public/images/habitica.png";
import leveluplifepic from "../../../public/images/leveluplife.jpg";
import codesign1 from "../../../public/images/codesign1.jpg";
import codesign2 from "../../../public/images/codesign2.jpg";
import venndiagram from "public/images/Venn.png";

const socialhero = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | Social Hero Research</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex flex-col items-center  text-dark w-full min-h-screen dark:text-light">
				<Layout>
					<h5 className=" bg-primary dark:bg-primaryDark text-light inline p-1 rounded">UX Research</h5>
					<div className="grid grid-cols-12 gap-12">
						<div className="col-span-12">
							<h1>Social Hero</h1>
							<h2>Fostering socialization through mobile games</h2>
							<ul className="list-disc marker:text-primary mt-8">
								<li className="list-item text-3xl font-display">Problem</li>
							</ul>
							<h4>
								Introverts feel drained from over-socializing faster than extroverts (Jenn Granneman).
								With presence of unavoidable social situations, how might we help build resilience for
								such moments in a safe space?
							</h4>
							<ul className="list-disc marker:text-primary mt-8">
								<li className="list-item text-3xl font-display">Deep dive into online communities</li>
							</ul>
							<h4>
								An <span className="font-bold">online survey</span> (n=202) was conducted to better
								understand how people navigate online spaces, learning about their experiences and
								understanding what makes them feel safe.
								<br /> <br />
								<span className="font-bold">Focus groups</span> were conducted to allow participants
								share in depth their experiences while potentially relating to stories of other
								participants.
								<br /> <br />A <span className="font-bold">co-design session</span> was also conducted
								in the focus group where participants would design screens they would like to see in our
								game. This allowed us to understand features they’d like in the game as well as their
								reasoning behind it.
							</h4>
						</div>
						<div className="col-span-7">
							<Image src={codesign1} className="rounded-lg border-2 border-solid border-dark" />
							<p>Example of co-design session activity</p>
						</div>
						<div className="col-span-5">
							<Image src={codesign2} className="rounded-lg border-2 border-solid border-dark" />
							<p>Example of co-design session activity</p>
						</div>
						<div className="col-span-12">
							<ul className="list-disc marker:text-primary mt-8">
								<li className="list-item text-3xl font-display">Competitive Audit</li>
							</ul>
							<h4>
								A competitive audit was conducted on applications that were deemed similar to our idea,
								to understand features that are already successful with users. These applications
								include <span className="text-primary dark:text-primaryDark">‘Habitica’</span> and
								<span className="text-primary dark:text-primaryDark">‘Level-up Life’</span>. We
								play-tested and collected app store reviews to understand the successful aspects of
								these apps.
							</h4>
						</div>
						<div className="col-span-6">
							<Image
								src={habiticapic}
								className=" w-full h-auto rounded-lg border-2 border-solid border-dark"
							/>
							<p>Screenshot of Habitica</p>
						</div>
						<div className="col-span-6">
							<Image
								src={leveluplifepic}
								className="w-full h-auto rounded-lg border-2 border-solid border-dark"
							/>
							<p>Screenshot of Level Up Life</p>
						</div>
						<div className="col-span-12">
							<ul className="list-disc marker:text-primary mt-8">
								<li className="list-item text-3xl font-display">User Interview</li>
							</ul>
							<h4>
								User interviews were conducted to understand potential users’ thoughts on what are good
								features by asking about their expectations of such a game. These user interviews had
								opened a new avenue of thought - to foster social courage rather than to ‘fix social
								anxiety’.
							</h4>
							<ul className="list-disc marker:text-primary mt-8">
								<li className="list-item text-3xl font-display">Research Findings and Features</li>
							</ul>
							<h4>
								Research data from the various methods were brought together and the below major themes
								were created.
							</h4>
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
						<div className="col-span-7">
							<ul className="list-disc marker:text-primary">
								<li className="list-item text-3xl font-display">Brainstorming</li>
							</ul>
							<h4>
								Based off research findings, we brainstormed for features as shown in the venn diagram.
							</h4>
						</div>
						<div className="col-span-5">
							<Image src={venndiagram} className="rounded-lg border-2 border-solid border-dark" />
						</div>
						<div className="col-span-12">
							<ul className="list-disc marker:text-primary">
								<li className="list-item text-3xl font-display">Features</li>
							</ul>
							<h4>
								After brainstorming and further development of some ideas, we decided on the following
								features:
							</h4>
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
							<h4>App creation of mobile game interactive prototype coming soon</h4>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default socialhero;
