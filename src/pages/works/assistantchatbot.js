import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import promptexample from "../../../public/images/svgs/Prompt Result Example.svg";
import { DoubleDiamond } from "../../components/Icons";
import chatbotsketch from "public/images/ChatbotSketch_Web.jpg";
import wireframe from "../../../public/images/wireframe.png";

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
					<h5 className=" bg-primary dark:bg-primaryDark text-light inline p-1 rounded ml-4">
						Prompt Engineering
					</h5>
					<div className="grid grid-cols-12 gap-12 gap-y-24 md:gap-8">
						<div id="title" className="col-span-12">
							<h1>Trustworthy and Assistive AI Chatbot</h1>
							<h2>A design concept for a more productive internal business support agent</h2>
						</div>
						<div id="problem" className="col-span-12">
							<h3>The Problem</h3>
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
							<h4 className="mt-4">Research Phase</h4>
							<p>The research phase followed the process of:</p>
							<ul className="list-decimal">
								<li className="list-item">Qualitative data gathering and analysis</li>
								<li className="list-item">Quantitative data gathering and analysis</li>
								<li className="list-item">Data triangulation and defining themes/design suggestions</li>
							</ul>
							<h4 className="mt-12">Design Phase</h4>
							<p>The design phase followed the process of:</p>
							<ul className="list-decimal">
								<li className="list-item">Sketching</li>
								<li className="list-item">Wireframing</li>
								<li className="list-item">Usability testing</li>
								<li className="list-item">
									Iteration of design based on feedback followed by another round usability testing
									for mid and high-fidelity
								</li>
								<li className="list-item">Final design</li>
							</ul>
						</div>
						<div id="research" className="col-span-12">
							<h3>Research</h3>
							<h4 className="mt-4">Resarch Questions</h4>
							<ol className="list-decimal">
								<li className="list-item">
									What are users' expectations and current perceptions of chatbot as a solution at
									workplace?
								</li>
								<li className="list-item">
									What design aspects of AI chatbots would be most likely to build and maintain users'
									trust over time?
								</li>
								<li className="list-item">
									What accessibility considerations should be included in the design of AI chatbots?
								</li>
							</ol>
							<h4 className="mt-12">User Interview and Contextual Inquiry</h4>
							<p>
								To understand the expectations and preceptions users have of AI chatbots, exploratory
								user research was conducted in the form of
								<span className="font-extrabold"> semi-instructured interviews</span> coupled with
								<span className="font-extrabold"> contextual inquiry</span>. The contextual inquiry
								consisted of providing participants with several workplace scenarios which they will try
								to solve the issue using chatgpt(instructed to act as a workplace chatbot)/workplace
								chatbot
							</p>
							<h4 className="mt-12">Survey</h4>
							<p>
								We followed up with a survey to{" "}
								<span className="font-extrabold">validate findings </span>
								from the user interview and contextual inquiry through quantitative results. The survery
								consisted of preference testing and follow up open-ended questions to understand the
								reasoning of their preferences.
							</p>
						</div>
						<div id="findings" className="col-span-12">
							<h3>Research Findings</h3>
							<p>
								Here are the findings from the interview and contextual inquiry which were then
								validated and refined after analyzing survey data.
							</p>
							<h4 className="mt-4">A challenge of trustworthiness in AI chatbot</h4>
							<h5 className="mt-2">Lack of credibility:</h5>
							<p>
								Driven by errors and inaccuracies constantly generated by AI which discourages users
								from relying onchatbot responses.
							</p>
							<h5 className="mt-2">Lack of transparency:</h5>
							<p>
								Participants often find it difficult to determine how the chatbot arrives at its
								responses and what is the chain of thought behind it. Users wanr to seel the reasoning
								and details laid out.
							</p>
							<h5 className="mt-2">Data privacy concern:</h5>
							<p>
								Concerns about privacy were raised especially in a workplace setting where there are
								confidential information that could have been shared in chat. They were unsure how chat
								data will be stored.{" "}
							</p>
							<h4 className="mt-12">A need for a more engaging conversational experience</h4>
							<h5 className="mt-2">Lack of human-likeness:</h5>
							<p>
								Participants found the chatbots unable to empathize with human emotions and understand
								complexity and nuances of human language. Participants also expressed frustration when
								chatbots do not connect them to human agents, leaving their problem unsolved.
							</p>
							<h5 className="mt-2">Lack of contextual understanding:</h5>
							<p>
								Participants liked how chatgpt is able to easily pick up on previous topics in a chat,
								recalling negative experiences where they had to repeatedly provide information to other
								chatbots.
							</p>
							<h5 className="mt-2">Lack of flexibility:</h5>
							<p>
								Participants felt a lack of flexbility when interacting with chatbots. They pointed out
								various other input/output methods including audio and images as an
								alternative/supplementary to text.
							</p>
							<h4 className="mt-12">A need for chatbot's assistance to boost productivity at work</h4>
							<h5 className="mt-2">Task execution:</h5>
							<p>
								Participants had an expectation that chatbots can go one step further and implement
								suggestions and instructions right away.
							</p>
							<p className="font-bold"></p>
							<h5 className="mt-2">Boosting work productivity</h5>
							<p>
								Participants described the potential of gaining assistance around day-to-day tasks such
								as summarizing meeting notes, etc...
							</p>
						</div>
						<div id="designsuggstion" className="col-span-12">
							<h3>Design Suggestion</h3>
							<p>
								We decided to tackle the themes above through prompt engineering coupled with UX design.
								Prompt engineering will be able to improve the chatbots's response while UX design will
								be able to improve on the experience and visual aspects whilst using the chatbot.
							</p>
							<div className="flex gap-12 md:flex-col">
								<div id="promptsuggestion" className="w-[50%] md:w-full mt-12">
									<h4>Prompt Engineering</h4>
									<p>
										Prompt engineering aspects included these considerations to address the two
										findings from our research.
									</p>
									<h5 className="mt-2">Trust Challenges:</h5>
									<ul className="list-disc">
										<li className="list-item">Include source links</li>
										<li className="list-item">Show its chain of thought</li>
										<li className="list-item">Reduce verbosity in answers</li>
										<li className="list-item">Handle data privacy and lack of information</li>
									</ul>
									<h5 className="mt-2">Conversational Experience:</h5>
									<ul className="list-disc">
										<li className="list-item">Talk in an empathetic tone</li>
										<li className="list-item">Display response in bulletpoints </li>
										<li className="list-item">Ask follow up questions</li>
									</ul>
								</div>
								<div id="uxdesign" className="w-[50%] md:w-full  mt-12">
									<h4>UX Design</h4>
									<p>
										Following are the features that we came up with to address the research findings
									</p>
									<h5 className="mt-2">Trust Challenge:</h5>
									<ul className="list-disc">
										<li className="list-item">User Feedback</li>
									</ul>
									<h5 className="mt-2">Conversational Experience:</h5>
									<ul className="list-disc">
										<li className="list-item">Multimedia references</li>
										<li className="list-item">Accessible Chat History</li>
										<li className="list-item">Speech-to-Text input and Text-to-Speech output</li>
									</ul>
									<h5 className="mt-2">Boosting productivity with assistance in:</h5>
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
						<div id="promptengineering" className="col-span-12">
							<h3>Prompt Engineering</h3>
							<p>
								Image below shows an example of a chatbot response after being prompt engineered by us
								which we implemented the design suggestions from above. Response was generated using
								Langchain, OpenAI API drawing information from openly available data from Nvidia's
								website.
							</p>
							<Image
								src={promptexample}
								alt="prompt result example"
								className="w-[75%] h-auto rounded-2xl m-auto"
								priority
							/>
						</div>
						<div id="uxdesigniteration" className="col-span-12">
							<h3>Sketches/Wireframes</h3>
							<p>
								The initial design was inspired by Chatgpt as it was what most users are expected to be
								familiar with. Sketches by teammmates were collated and certain features were decided on
								to proceed to the wireframing stage.
							</p>
							<div>
								<Image src={chatbotsketch} />
								<p className="text-center">Sketches</p>
							</div>
							<div>
								<Image src={wireframe} />
								<p className="text-center">Wireframe</p>
							</div>
							<h3 className="mt-12">High Fidelity Interactive Prototype</h3>
							<h4>Landing Page</h4>
							<h4>Request Processing</h4>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default assistantchatbot;
