import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import habiticapic from "../../../public/images/habitica.png";
import leveluplifepic from "../../../public/images/leveluplife.png";
import habiticalight from "../../../public/images/habitica_light.png";
import leveluplifelight from "../../../public/images/leveluplife_light.png";
import codesign1 from "../../../public/images/codesign1.jpg";
import codesign2 from "../../../public/images/codesign2.jpg";
import wireframe from "public/images/socialhero_wireframe.png";
import landingpage from "public/images/landingpage_phone.png";
import tavern1 from "public/images/tavern_phone.png";
import tavern2 from "public/images/tavernexpanded_phone.png";
import profile from "public/images/profile_phone.png";
import academy from "public/images/academy_phone.png";
import fantasy from "public/images/fantasy.png";
import modern from "public/images/modern.png";
import farm from "public/images/farm.png";

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
					<h5 className=" bg-primary dark:bg-primaryDark text-light inline p-1 rounded ml-4">UX Design</h5>
					<div className="grid grid-cols-12 gap-12 gap-y-24 md:gap-8">
						<div id="title" className="col-span-12">
							<h1>Social Hero</h1>
							<h2>Fostering socialization through mobile games</h2>
							<div className="mt-12 w-full flex gap-12 py-12 md:flex-col md:text-center border-b-2 border-black dark:border-light">
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
								We had conducted exploratory user interviews with 3 graduate students who had identified
								as introverts that also enjoy games. Through these interviews, we wanted to introduce
								the idea of a gamified app that can help "fix" social anxiety by suggesting players task
								they can do in the real world and get feedback from the interviewees about how they see
								themselves using the application and some features that they would like to see.
							</p>
							<p>
								From these interviews, we heard details such as "" and it had opened a new avenue of
								thought - to foster social courage rather than to ‘fix social anxiety’.
							</p>
						</div>
						<div id="refinement" className="col-span-12">
							<h3 className="font-bold">Problem Statement Refinement</h3>
							<p>
								With the new perspective introduced from the user interivew, we pivoted our research
								from just looking at introverts to any who might want to be more sociable.
							</p>
						</div>
						<div id="deepdive" className="col-span-12">
							<h3 className="font-bold">Deep dive into online communities</h3>
							<p>
								Looking to better understand how people navigate online spaces, learn about their
								experiences and understanding what makes them feel safe, we decided to release an online
								survey and follow with an in-person workshop with willing participants.
							</p>
							<h4 className="mt-8">Online Survey</h4>
							<p>
								We had successfully surveyed over 200 participants with age ranging from 18-43, majority
								being university students. We had released the survey on social media as well as share
								it through the university network.
								<br></br>
								<br></br>
								Many respondents shared that they are motivated to continue using online spaces due to
								the community aspect as well as communicating with others. Participants also shared that
								having control of who they can talk to contributes to them feeling safe online.
							</p>
							<h4 className="mt-8">In-person Workshop</h4>
							<p>
								The in-person workshop consisted of 2 parts - a focus group discussion and a co-design
								session. Each workshop consisted of 4-6 participants, with 1 team member leading each
								part.
							</p>
							<h5 className="mt-8">Part 1: Focus Group</h5>
							<p>
								During the focus group, we introduced different scenarios, each looking into a different
								aspects of users in online spaces including community aspects that contribute to the
								feeling of safety, online activity influencing offline activity and their experinces in
								using online platforms for social interactions.
								<br></br>
								<br></br>
								One thought that was commonly brought up amongst the different groups of workshops was
								that online spaces is a great place for social interaction and finding others of the
								same passion. Many agreed that having someone to faciliate interactions is also helpful.
							</p>
							<h5 className="mt-8">Part 2: Co-design Session</h5>
							<p>
								During the session, we had participants discuss with their neighbour what elements that
								they have seen/been exposed to that is most effective in making connections on online
								games. After having them ideate, we had participants to design screens for a mobile game
								that would help faciliate socialization.
								<br></br>
								<br></br>
								Many participants had drawn screens that showed player interaction in a game world and
								also in-game chats, working together to complete a goal.
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
						<div id="findings" className="col-span-12">
							<h3 className="font-bold">Research Findings and Features</h3>
							<p>
								Through the interview, online survey and in-person workshop, the following major themes
								were defined.
							</p>
							<div className="flex mt-12 gap-12 md:flex-col">
								<div className="w-[50%] md:w-full border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4 text-primary dark:text-primaryDark">
										Community
									</h5>
									<p>Need for human connection</p>
									<p>Collaboration between users</p>
								</div>
								<div className="w-[50%] md:w-full border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4 text-primary dark:text-primaryDark">
										Safety
									</h5>
									<p>Control of who they are interacting with</p>
									<p>Control of who can see their information</p>
								</div>
							</div>
							<div className="flex mt-12 gap-12 md:flex-col">
								<div className="w-[50%] md:w-full border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4 text-primary dark:text-primaryDark">
										Aesthetics
									</h5>
									<p>Reminiscent and colorful 8-bit art style</p>
									<p>World style differing from real life (Escapism)</p>
								</div>
								<div className="w-[50%] md:w-full border-2 border-dark rounded-2xl p-2 dark:border-light">
									<h5 className=" underline underline-offset-4 text-primary dark:text-primaryDark">
										User
									</h5>
									<p>Ability to express themselves</p>
									<p>Having a sense of accomplishment</p>
								</div>
							</div>
						</div>
						<div id="competitiveaudit" className="col-span-12">
							<h3 className="font-bold">Competitive Audit</h3>
							<p>
								A competitive audit was conducted on applications that gamified the experiences of doing
								tasks to understand features that are already successful with users as well as areas of
								improvements that could be applied to the design we were building. These applications
								include <span className="text-primary dark:text-primaryDark">‘Habitica’</span> and
								<span className="text-primary dark:text-primaryDark">‘Level-up Life’</span>. For this
								competitive audit, we synthesized app store reviews as well as play-tested the
								applications.
							</p>
							<div className=" flex flex-col gap-12 md:gap-8 mt-12">
								<div className=" w-full">
									<h4>Aspects of Habitica</h4>
									<Image src={habiticapic} className=" w-auto max-h-[700px] mt-4 dark:hidden" />
									<Image
										src={habiticalight}
										className="w-auto max-h-[700px] mt-4 hidden dark:block"
									/>
								</div>
								<div className="w-full">
									<h4>Aspects of Level Up Life</h4>
									<Image src={leveluplifepic} className="w-auto max-h-[700px] mt-4 dark:hidden" />
									<Image
										src={leveluplifelight}
										className="w-auto max-h-[700px] mt-4 hidden dark:block"
									/>
								</div>
							</div>
						</div>
						<div id="Finalized Features" className="col-span-12">
							<h3>Finalized Features</h3>
							<p></p>
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
						<div id="concepts" className="col-span-12">
							<h3 className="mt-4">Concept Designs</h3>
							<p>
								Each designer took it on their own to create different concepts coming up with the
								modern, fantasy and farm concepts.
							</p>
							<div className=" flex md:flex-col gap-12 md:gap-8 mt-12">
								<div className="w-[33%] text-center md:w-full">
									<h4>Concept 1 - Modern</h4>
									<Image src={modern} className="w-auto max-h-[700px] m-auto" />
								</div>
								<div className="w-[33%] text-center md:w-full">
									<h4>Concept 2 - Fantasy</h4>
									<Image src={fantasy} className="w-auto max-h-[700px] m-auto" />
								</div>
								<div className="w-[33%] text-center md:w-full">
									<h4>Concept 3 - Farm</h4>
									<Image src={farm} className="w-auto max-h-[700px] m-auto" />
								</div>
							</div>
							<p className="mt-12">
								We eventually decided on a mix of all three concepts, taking in the brighter colors of
								the farm/modern concept whilst keeping the escapsim/apart from reality idea of the
								fantasy concept.
							</p>
						</div>
						<div id="wireframe" className="col-span-12">
							<h3 className="mt-4">Wireframe</h3>
							<Image src={wireframe} className="w-auto max-h-[700px] m-auto" />
						</div>
						<div id="usability" className="col-span-12">
							<h3 className="mt-4">Usability Testing</h3>
							<p>
								Usability testing with 5 users were conducted with the high fidelity figma prototype. We
								had users intuitively navigate the prototype and only give hints when users were truly
								stuck/unable to advance.
							</p>
							<h4 className="mt-8">Findings</h4>
							<p>It led to 3 major findings.</p>
							<ol className="list-decimal">
								<li className="list-item">
									Users reported that certain features to be illegible due to small font size and
									images which led us to increase the font size to ensure the application is
									accessible to all.
								</li>
								<li className="list-item">
									Users showed us that there was a lack of clarity when launching the application
									which led us to create a guide for users.
								</li>
								<li className="list-item">
									Some interactions did not work as expected which led us to troubleshoot the problem
									areas.
								</li>
							</ol>
						</div>
						<div id="hifidesign" className="col-span-12">
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
						<div id="outcome" className="col-span-12"></div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default socialhero;
