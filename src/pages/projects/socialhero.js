import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import mainpic from "../../../public/images/LandingPage.jpg";
import Link from "next/link";

const socialhero = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | Social Hero</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex items-center text-dark w-full min-h-screen dark:text-light">
				<Layout>
					<AnimatedText text="Social Hero" className="mb-4 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />
					<div className="items-center text-center mb-16">
						<p>Ongoing Research Project at University of California, Santa Cruz</p>
						<p>
							that started off as a mini project during 'Intro to Design Methods' class at UCSC, it
							expanded to a full-fledged research project under the guidance of Professor Kathryn
							Ringland.
						</p>
						<p>
							<span className="font-bold text-lg">Project Since:</span> Fall 2022
						</p>
					</div>
					<div className="grid grid-cols-12 gap-24 gap-y-24 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0">
						<div className="col-span-8">
							<h1 className="font-bold text-lg">
								Chapter 1: During 'Intro to Design Methods' class, Fall 2022
							</h1>
							<p>
								Tasked to design something for a selected community within 2 weeks, a group of
								introverts decided to create a mobile game(interactive prototype) that can help foster
								social courage which we named "Social Hero".
							</p>

							<h2 className="font-bold uppercase text-lg my-4">Process </h2>
							<ol className="list-decimal ml-8">
								<li className="list-item">
									Brainstorm possible directions to take the project of 'designing for a selected
									community'
								</li>
								<li className="list-item">Brainstorm features that might be part of the prototype</li>
								<li className="list-item">Conduct interviews with potential users</li>
								<li className="list-item">
									Design for a low-fidelity prototype guided by insights from interviews
								</li>
								<li className="list-item">
									Iterate on designs through review with team members and professor for a high
									fidelity prototype
								</li>
								<li className="list-item">
									Conduct user testing to identify any pain points and iterate on prototype for any
									final adjustments.
								</li>
							</ol>
							<h2 className="font-bold uppercase text-lg my-4">Challenges Faced:</h2>
							<ul className="list-disc ml-4">
								<li className="list-item font-bold">Features of the game</li>
							</ul>
							<p className="ml-8">
								When creating the low-fidelity sketches, the prototype team were unsure of what features
								should be included in the design. We had discussions such as whether to include global
								interaction or how progress should be tracked. After listening to our team which had
								conducted the user interviews, it affirmed our idea of having a platform for all users
								to interact as well as changing a leveling system to a categorical tracker.
							</p>
							<ul className="list-disc ml-4">
								<li className="list-item font-bold">Navigating the prototype</li>
							</ul>
							<p className="ml-8">
								During our usability testing, we came to realise that it was not intuitive to the users
								on how the map could be navigated. Many had assumed it was a tap to move avatar to the
								location. To better assist users in how to navigate the map, we decided to create an
								information board which appears when the user first uses the application. It can later
								be accessed through the 'i' icon on the top right of the map.
							</p>
						</div>
						<div className="col-span-4">
							<Image
								src={mainpic}
								alt="Final Prototype landing page"
								className="w-full h-auto rounded-2xl border-black border-4"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
							<p className="text-center">Final Prototype Landing Page</p>
						</div>
						<div className="col-span-12">
							<h1 className="font-bold text-lg">Chapter 2: Independent Studies, Spring 2023</h1>
							<p>
								Members decided to carry on the project done in class to a full fledged IRB-approved
								research project with the focus on exploring and designing online applications for
								prosocialization in adults in our Spring quarter which later made its way to DIS ACM
								2023 workshop 'Designing for and Reflecting upon Resilience in Health and Wellbeing'
								as&nbsp;
								<Link
									className="text-primary underline"
									target={"_blank"}
									href="https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/0/165972/files/2023/07/Francis-Dominguez-et-al.-Looking-at-Loneliness-though-Connection-and-Resilience.pdf"
								>
									a workshop paper.
								</Link>
							</p>
							<h2 className="font-bold uppercase text-lg my-4">Process</h2>
							<ol className="list-decimal ml-8">
								<li className="list-item">
									Created an open-ended survey to understand the factors that contribute to
									participants feeling safe within online spaces while also recruiting participants
									for our in-person focus group workshops.
								</li>
								<li className="list-item">
									Created a focus group protocol - group discussion and design session to have a
									deeper dive into safety in online experiences as well as to understand what features
									participants might find helpful in promoting online interactions.
								</li>
								<li className="list-item">
									Revised survey and protocol with feedback from Professors and fellow research lab
									members.
								</li>
								<li className="list-item">Conducted focus groups</li>
							</ol>
							<h2 className="font-bold uppercase text-lg my-4">Challenges Faced:</h2>
							<ul className="list-disc ml-4">
								<li className="list-item font-bold">Asking the right questions</li>
							</ul>
							<p className="ml-8">One of the challenges faced is structuring the focus group sessions.</p>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default socialhero;
