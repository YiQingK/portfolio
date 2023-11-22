import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import habiticapic from "../../../public/images/habitica.png";
import leveluplifepic from "../../../public/images/leveluplife.jpg";
import codesign1 from "../../../public/images/codesign1.jpg";
import codesign2 from "../../../public/images/codesign2.jpg";

const socialhero = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | Social Hero</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex flex-col items-center  text-dark w-full min-h-screen dark:text-light">
				<Layout>
					<h5 className=" bg-primary dark:bg-primaryDark text-light inline p-1 rounded">UX Research</h5>
					<div className="grid grid-cols-12 gap-24">
						<div className="col-span-12">
							<h1>Social Hero</h1>
							<h2>Fostering socialization through mobile games</h2>
							<h3 className="mt-8">Problem</h3>
							<h4>
								Introverts feel drained from over-socializing faster than extroverts (Jenn Granneman).
								With presence of unavoidable social situations, how might we help build resilience for
								such moments in a safe space?
							</h4>
							<h3 className="mt-8">Deep dive into online communities</h3>
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
						</div>
						<div className="col-span-5">
							<Image src={codesign2} className="rounded-lg border-2 border-solid border-dark" />
						</div>
						<div className="col-span-12">
							<h3 className="mt-8">Competitive Audit</h3>
							<h4>
								A competitive audit was conducted on applications that were deemed similar to our idea,
								to understand features that are already successful with users. These applications
								include <span className="text-primary dark:text-primaryDark">‘Habitica’</span> and
								<span className="text-primary dark:text-primaryDark">‘Level-up Life’</span>. We
								play-tested and collected app store reviews to understand the successful aspects of
								these apps.
							</h4>
						</div>
						<div className="col-span-6 flex justify-center">
							<Image
								src={habiticapic}
								className=" w-[75%] h-auto rounded-lg border-2 border-solid border-dark"
							/>
						</div>
						<div className="col-span-6 flex justify-center">
							<Image
								src={leveluplifepic}
								className="w-[75%] h-auto rounded-lg border-2 border-solid border-dark"
							/>
						</div>

						<div className="col-span-12">
							<h3 className="mt-8">User Interview</h3>
							<h4>
								User interviews were conducted to understand potential users’ thoughts on what are good
								features by asking about their expectations of such a game. These user interviews had
								opened a new avenue of thought - to foster social courage rather than to ‘fix social
								anxiety’.
							</h4>
							<h3 className="mt-8">Research Findings and Features</h3>
							<h4>
								Research data from the various methods were brought together and the below major themes
								were created.
							</h4>
						</div>
						<div className="col-span-6">
							<h3>Findings</h3>
							<h4 className="font-bold mt-4">Community</h4>
							<ul className="list-disc">
								<li className="list-item ml-8">Need for human connection</li>
								<li className="list-item">Collboration between users</li>
							</ul>
							<h4 className="font-bold mt-4">Safety</h4>
							<ul className="list-disc">
								<li className="list-item">Control of who they are interacting with</li>
								<li className="list-item">Control of who can see their information</li>
							</ul>
							<h4 className="font-bold mt-4">Aesthetics</h4>
							<ul className="list-disc">
								<li className="list-item">Reminiscent and colorful 8-bit art style</li>
								<li className="list-item">World style differing from real life (Escapism)</li>
							</ul>
							<h4 className="font-bold mt-4">User</h4>
							<ul className="list-disc">
								<li className="list-item">Ability to expres themselves</li>
								<li className="list-item">Sense of accomplishment</li>
							</ul>
						</div>
						<div className="col-span-6">
							<h3>Features</h3>
							<h4 className="font-bold mt-4">Community</h4>
							<ul className="list-disc">
								<li className="list-item">Designated space for users to interact</li>
								<li className="list-item">Tasks that require collaboration</li>
							</ul>
							<h4 className="font-bold mt-4">Safety</h4>
							<ul className="list-disc">
								<li className="list-item">Option to be anonymous</li>
								<li className="list-item">Option to set profile privacy</li>
							</ul>
							<h4 className="font-bold mt-4">Aesthetics</h4>
							<ul className="list-disc">
								<li className="list-item">Brightly colored fantasy world</li>
								<li className="list-item">Pixel art characters/world</li>
							</ul>
							<h4 className="font-bold mt-4">User</h4>
							<ul className="list-disc">
								<li className="list-item">Customizable characters and profile</li>
								<li className="list-item">Achievements and badges</li>
							</ul>
						</div>
						<div className="col-span-12">
							<h4>Design process of mobile game interactive prototype coming soon</h4>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default socialhero;
