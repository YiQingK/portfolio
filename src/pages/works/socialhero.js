import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import habiticapic from "../../../public/images/habitica.png";
import leveluplifepic from "../../../public/images/leveluplife.png";
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
					<div className="grid grid-cols-12 gap-12 gap-y-24">
						<div id="title" className="col-span-12">
							<h1>Social Hero</h1>
							<h2>Fostering socialization through mobile games</h2>
						</div>
						<div id="problem" className="col-span-12">
							<h3 className="font-bold">Problem</h3>
							<p>
								Introverts feel drained from over-socializing faster than extroverts (Jenn Granneman).
								With presence of unavoidable social situations, how might we help build resilience for
								such moments in a safe space?
							</p>
						</div>
						<div id="deepdive" className="col-span-12">
							<h3 className="font-bold">Deep dive into online communities</h3>
							<p>
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
							</p>
						</div>
						<div className="col-span-7">
							<Image src={codesign1} className="rounded-lg border-2 border-solid border-dark" />
							<p>Example of co-design session activity</p>
						</div>
						<div className="col-span-5">
							<Image src={codesign2} className="rounded-lg border-2 border-solid border-dark" />
							<p>Example of co-design session activity</p>
						</div>
						<div id="competitiveaudit" className="col-span-12">
							<h3 className="font-bold">Competitive Audit</h3>
							<p>
								A competitive audit was conducted on applications that were deemed similar to our idea,
								to understand features that are already successful with users. These applications
								include <span className="text-primary dark:text-primaryDark">‘Habitica’</span> and
								<span className="text-primary dark:text-primaryDark">‘Level-up Life’</span>. We
								play-tested and collected app store reviews to understand the successful aspects of
								these apps.
							</p>
							<div className="flex gap-12">
								<div className="text-center w-[50%]">
									<Image src={habiticapic} className=" w-auto max-h-[700px] " />
									<p className="max-w-[700px]">Screenshot of Habitica</p>
								</div>
								<div className="text-center w-[50%]">
									<Image src={leveluplifepic} className="w-auto max-h-[700px]" />
									<p className="max-w-[700px]">Screenshot of Level Up Life</p>
								</div>
							</div>
						</div>
						<div id="research" className="col-span-12">
							<h3 className="font-bold">User Interview</h3>
							<p>
								User interviews were conducted to understand potential users’ thoughts on what are good
								features by asking about their expectations of such a game. These user interviews had
								opened a new avenue of thought - to foster social courage rather than to ‘fix social
								anxiety’.
							</p>
						</div>
						<div id="findings" className="col-span-12">
							<h3 className="font-bold">Research Findings and Features</h3>
							<h4>
								Data from the various methods were brought together and the below major themes were
								created.
							</h4>
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

						<div className="col-span-12">
							<ul className="list-disc marker:text-primary">
								<h3 className="font-bold">Brainstorming</h3>
							</ul>
							<h4>
								Based off research findings, we brainstormed for features as shown in the venn diagram.
							</h4>
							<p>Each venn circle represents each designers ideas</p>
							<Image
								src={venndiagram}
								className=" w-auto max-h-[500px] rounded-lg border-2 border-solid border-dark p-4"
							/>
						</div>
						<div className="col-span-12">
							<h3 className="font-bold">Features</h3>
							<h4>After further development of some ideas, we decided on the following features:</h4>
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
