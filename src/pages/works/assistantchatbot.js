import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
//import DoubleDiamond from "../../../public/Double Diamond.svg";
import { DoubleDiamond } from "../../components/Icons";

const assistantchatbot = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | Chatbot</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex flex-col items-center  text-dark w-full min-h-screen dark:text-light">
				<Layout>
					<h5 className=" bg-primary dark:bg-primaryDark text-light inline p-1 rounded ">UX Research</h5>
					<h5 className=" bg-primary dark:bg-primaryDark text-light inline p-1 rounded ml-4">UX Design</h5>

					<div className="grid grid-cols-12 gap-12 gap-y-24">
						<div className="col-span-12">
							<h1>Trustworthy and Assistive AI Chatbot</h1>
							<h2>A design concept for a more productive internal business support agent</h2>
						</div>
						<div id="problem" className="col-span-12">
							<h3>Original Problem</h3>
							<p>
								AI Chatbots are known to suffer from hallucination where text generated can be factually
								wrong, irrelevant or even nonsensicial.
							</p>
							<h4>
								With the scope of an internal business IT/HR support chatbot, how might we design a
								chatbot that users feel they can trust?
							</h4>
						</div>
						<div id="process" className="col-span-12">
							<h3>Process</h3>
							<p>
								We applied a double diamond approach to this project, seeking to understand the issue
								and defining problem in the research phase followed by developing and delivering a
								solution in the design phase.
							</p>
							<DoubleDiamond className="text-dark dark:text-light m-auto mt-4" />
							{/*<Image src={DoubleDiamond} alt="Double Diamond Process" className="w-[50%] m-auto" />*/}
						</div>
						<div id="research" className="col-span-12">
							<h3>Research</h3>
							<h4>Resarch Questions</h4>
							<ol className="list-decimal">
								<li className="list-item">
									What are users' expectations and current perceptions of chatbot as a solution at
									workplace?
								</li>
								<li className="list-item">
									What UX design festures of AI chatbots would be most likely to build and maintain
									users' trust over time?
								</li>
							</ol>
							<h4>User Interview and Contextual Inquiry</h4>
							<p>
								To understand the expectations and preceptions users have of AI chatbots, exploratory
								user research was conducted in the form of
								<span className="font-bold"> semi-instructured interviews</span> coupled with
								<span className="font-bold"> contextual inquiry</span>.
							</p>
							<h4>Survey</h4>
							<p>
								We followed up with a survey to <span className="font-bold">validate findings </span>
								from the user interview and contextual inquiry through quantitative results. The survery
								consisted of preference testing and follow up open-ended questions to understand the
								reasoning of their preferences.
							</p>
						</div>
						<div id="findings" className="col-span-12">
							<h3>Findings</h3>
							<h4>A challenge of trustworthiness in AI chatbot</h4>
							<p></p>
							<h4>A need for a more engaging conversational experience</h4>
							<p></p>
							<h4>A need for chatbot's assistance to boost productivity at work</h4>
							<p></p>
						</div>
						<div id="designsuggstion" className="col-span-12">
							<h3>Design Suggestion</h3>
							<div className="flex gap-12">
								<div id="promptengineering" className="w-[50%]">
									<h4>Prompt Engineering</h4>
									<p>
										Prompt engineering aspects included these considerations to address the two
										findings from our research.
									</p>
									<h5>Trust Challenges:</h5>
									<ul className="list-disc">
										<li className="list-item">Include source links</li>
										<li className="list-item">Show its chain of thought</li>
										<li className="list-item">Handle data privacy and lack of information</li>
									</ul>
									<h5>Conversational Experience:</h5>
									<ul className="list-disc">
										<li className="list-item">Talk in an empathetic tone</li>
										<li className="list-item">Display answer in bulletpoints </li>
										<li className="list-item">Ask follow up questions</li>
									</ul>
								</div>
								<div id="uxdesign" className="w-[50%]">
									<h4>UX Design</h4>
									<p>
										Following are the features that we came up with to address the research findings
									</p>
									<h5>Trust Challenge:</h5>
									<ul className="list-disc">
										<li className="list-item">User Feedback</li>
									</ul>
									<h5>Conversational Experience:</h5>
									<ul className="list-disc">
										<li className="list-item">Multimedia references</li>
										<li className="list-item">Accessible Chat History</li>
										<li className="list-item">Speech-to-Text input and Text-to-Speech output</li>
									</ul>
									<h5>Bossting productivity with assistance in:</h5>
									<ul className="list-disc">
										<li className="list-item">Providing code support</li>
										<li className="list-item">
											Setting up meetings and generating meeting summary
										</li>
										<li className="list-item">Drafting emails</li>
										<li className="list-item">Raising helpdesk tickets</li>
									</ul>
								</div>
							</div>
						</div>
						<div id="designiteration" className="col-span-12">
							<h3>Design Iteration</h3>
							<p>Main design changes based on usability testing finding</p>
							<h4>Revision 1</h4>
							<p>
								With the need for productivity personalization and workflow streamlining, we integrated
								personal meeting calendar, to-do list and notification and created smart suggestions
								from the chatbot and quick confirmation from the user.
							</p>
							<h4>Revision 2</h4>
							<p>Preference for chatting over template use along</p>
							<h4>Revision 3</h4>
							<p>Real-time change and branded UI to improve user experience</p>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default assistantchatbot;
