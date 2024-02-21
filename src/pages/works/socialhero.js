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
import wireframe from "public/images/socialhero_wireframe.png";
import landingpage from "public/images/landingpage_phone.png";
import tavern1 from "public/images/tavern_phone.png";
import tavern2 from "public/images/tavernexpanded_phone.png";
import profile from "public/images/profile_phone.png";
import academy from "public/images/academy_phone.png";

const socialhero = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | Social Hero</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex w-full flex-col items-center justify-center text-dark min-h-screen dark:text-light">
				{/*flex w-full flex-col items-center justify-center dark:text-light*/}
				<Layout>
					<h5 className=" bg-primary dark:bg-primaryDark text-light inline p-1 rounded">UX Research</h5>
					<div className="grid grid-cols-12 gap-12 gap-y-24 md:gap-8">
						<div id="title" className="col-span-12">
							<h1>Social Hero</h1>
							<h2>Fostering socialization through mobile games</h2>
							<div className="mt-12 w-full flex py-12 md:flex-col md:text-center bg-primary bg-opacity-25">
								<div className="w-[50%] md:w-full md:px-4">
									<h4>Overview</h4>
									<p>
										The goal of this project as to understand how users currently navigate online
										spaces and therefore design such a space that they will feel comfortable in
										using and interacting with others.
									</p>
								</div>
								<div className="w-[50%] md:w-full md:mt-12 md:px-4">
									<h4>Team Members</h4>
									<p>Yi Qing Khoo, Naomi Du, Francis Dominguez, Sid Siddharthum, Rebeka Asryan</p>
									<h4 className="mt-4 md:mt-12">Skills showcased</h4>
									<p>
										Rapid Prototyping, User Testing, User Interivew, Focus Groups, Co-design,
										Qualitative Analysis
									</p>
								</div>
							</div>
						</div>

						<div id="problem" className="col-span-12">
							<h3 className="font-bold">Problem</h3>
							<p>
								Introverts feel drained from over-socializing faster than extroverts (Jenn Granneman).
								With presence of unavoidable social situations, how might we help build resilience for
								such moments in a safe space?
							</p>
						</div>
						<div id="userinterview" className="col-span-12">
							<h3 className="font-bold">User Interview</h3>
							<p>
								Exploratory user interviews which took 30-45 minutes were conducted to understand
								potential users’ thoughts on what are good features by asking about their expectations
								of such a game. Participants were graduate students These user interviews had opened a
								new avenue of thought - to foster social courage rather than to ‘fix social anxiety’.
							</p>
						</div>
						<div id="refinement" className="col-span-12">
							<h3 className="font-bold">Problem Statement Refinement</h3>
							<p>
								With the new perspective introduced from the user interivew, we pivoted our research
								to...
							</p>
						</div>
						<div id="deepdive" className="col-span-12">
							<h3 className="font-bold">Deep dive into online communities</h3>
							<h4>Online Survey</h4>
							<p>
								We had successfully surveyed over 200 participants (demographics, how it was set up for
								success). This survey was aimed to better understand how people navigate online spaces,
								learning about their experiences and understanding what makes them feel safe.
							</p>
							<h4>In-person Workshop</h4>
							<p>
								Through recruitment from the online survey, we conducted an in-person workshop which
								consisted of 2 parts - a focus group discussion session and a co-design session. Each
								workshop consisted of 4-6 participants, with 1 team member leading each part.
								<br /> <br />
								The <span className="font-bold">focus groups</span> allowed participants share their own
								experiences while also potentially relating to stories of other participants.
								<br /> <br />
								The <span className="font-bold">co-design session</span> had participants design screens
								they would like to see in our game. This allowed us to understand features they’d like
								in the game as well as their reasoning behind it.
							</p>
						</div>
						<div className="col-span-7 md:col-span-12">
							<Image src={codesign1} className="rounded-lg border-2 border-solid border-dark" />
							<p>Example of co-design session activity</p>
						</div>
						<div className="col-span-5 md:col-span-12">
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
							<div className="flex md:flex-col gap-12 md:gap-8">
								<div className="text-center w-[50%] md:w-full">
									<Image src={habiticapic} className=" w-auto max-h-[700px] " />
									<p className="max-w-[700px]">Screenshot of Habitica</p>
								</div>
								<div className="text-center w-[50%]  md:w-full">
									<Image src={leveluplifepic} className="w-auto max-h-[700px]" />
									<p className="max-w-[700px]">Screenshot of Level Up Life</p>
								</div>
							</div>
						</div>

						<div id="findings" className="col-span-12">
							<h3 className="font-bold">Research Findings and Features</h3>
							<h4>
								Data from the various methods were brought together and the below major themes were
								created.
							</h4>
							<div className="flex mt-12 gap-12 md:flex-col">
								<div className="w-[50%] md:w-full border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4 text-primary dark:text-primaryDark">
										Community
									</h5>
									<p>Need for human connection</p>
									<p>Collaboration between users</p>
								</div>
								<div className="w-[50%] md:w-full border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4 text-primary dark:text-primaryDar">
										Safety
									</h5>
									<p>Control of who they are interacting with</p>
									<p>Control of who can see their information</p>
								</div>
							</div>
							<div className="flex mt-12 gap-12 md:flex-col">
								<div className="w-[50%] md:w-full border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4 text-primary dark:text-primaryDar">
										Aesthetics
									</h5>
									<p>Reminiscent and colorful 8-bit art style</p>
									<p>World style differing from real life (Escapism)</p>
								</div>
								<div className="w-[50%] md:w-full border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4 text-primary dark:text-primaryDar">
										User
									</h5>
									<p>Ability to express themselves</p>
									<p>Having a sense of accomplishment</p>
								</div>
							</div>
						</div>
						<div id="brainstorming" className="col-span-12">
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
							<h3 className="mt-4">High Fidelity Design</h3>
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
							<div className="flex md:flex-col">
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

export default socialhero;
