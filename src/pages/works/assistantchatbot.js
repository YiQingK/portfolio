import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import promptexample from "../../../public/images/svgs/Prompt Result Example.svg";
import { DoubleDiamond } from "../../components/Icons";
import chatbotsketch from "public/images/ChatbotSketch_Web.jpg";
import wireframe from "../../../public/images/wireframe.png";
import landingpage from "public/images/welcome_display.png";
import requestpage from "public/images/request_display.png";
import surveryqn from "public/images/qnsample.png";

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
							<div className="mt-12 w-full flex gap-12 py-12 md:flex-col md:text-center border-b-2 border-black dark:border-light">
								<div className="w-[50%] md:w-full md:px-4">
									<h4>Overview</h4>
									<p>
										The goal of this project as to understand users expectations of AI chatbots in a
										workplace setting as well as improve user's trust in the system through research
										and follow up with designing a chatbot based on the research findings.
									</p>
								</div>
								<div className="w-[50%] md:w-full md:mt-12 md:px-4">
									<h4>Team Members</h4>
									<p>Yi Qing Khoo, Jurine Gong, Shivani Birajdar, Tam Cao</p>
									<h4 className="mt-4 md:mt-12">Skills showcased</h4>
									<p>
										Rapid Prototyping, User Testing, User Interivew, Prompt Engineering, Qualitative
										Analysis, Surveys, Quantitative Analysis
									</p>
								</div>
							</div>
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
								We had conducted 12 sessions of semi-structured interviews coupled with contextual
								inquiry with participants who are in industry, some from our sponsor company. This was
								done to understand the expectations and preceptions users have of AI chatbots. The
								contextual inquiry consisted of providing participants with several workplace scenarios
								which they will try to solve the issue using chatgpt(instructed to act as a workplace
								chatbot)/workplace chatbot. This allowed us to probe at perspectives that may not have
								been mentioned in the interview.
							</p>
							<h4 className="mt-12">Survey</h4>
							<div className="flex gap-12 md:flex-col">
								<div className="w-[50%] md:w-full mt-12 ">
									<p>
										We released a survery which gathered 42 responses to validate findings from the
										user interview and contextual inquiry through quantitative results. The survey
										consisted of a likert scale to capture possible nuances to their preference,
										preference testing and a follow up open-ended questions to understand the
										reasoning of their preferences.
									</p>
									<br></br>
									<p>
										The results such as preference for a certain style of answer had better informed
										our designs decisions before proceeding to the design phase. The special case of
										a 43%(concise answer) and 46%(detailed answer) divide of answer detail level had
										led us to a new idea of giving the users the ability to switch between the two
										when they felt necessary.
									</p>
								</div>
								<div className="[w-50%] md:w-full mt-12 ">
									<Image src={surveryqn} />
								</div>
							</div>
						</div>
						<div id="findings" className="col-span-12">
							<h3>Research Findings</h3>
							<p>
								The qualitative and quantitative data had resulted in 3 main themes with several
								sub-themes.
							</p>

							<h4 className=" mt-4">A challenge of trustworthiness in AI Chatbot</h4>
							<p>Lack of credibility</p>
							<p>Lack of transparency</p>
							<p>Data privacy concern</p>

							<h4 className=" mt-4 ">A need for a more engaging conversational experience</h4>
							<p>Lack of human-likeness</p>
							<p>Lack of contextual understanding</p>
							<p>Lack of flexibility</p>

							<h4 className=" mt-4 ">A need for chatbot's assistance to boost productivity at work</h4>
							<p>Task execution</p>
							<p>Boosting work productivity</p>
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
								familiar with. Sketches by teammmates were collated and certain design of features were
								decided on to proceed to the wireframing stage.
							</p>
							<div>
								<Image src={chatbotsketch} />
								<p className="text-center">Sketches</p>
							</div>
							<div>
								<Image src={wireframe} />
								<p className="text-center">Wireframe</p>
							</div>

							<h3 className="mt-12">Usability Testing</h3>
							<p>
								3 rounds of usability testing were conducted - once with the wireframe, once with the
								mid-fidelity design and once with the high-fidelity design, all with new participants as
								we wanted to also see if useres will be able to intuitively use the system.
							</p>
							<h4 className="mt-8"> Round 1</h4>
							<p>
								Testing with the wireframe showed that users preferred to interact with the bot through
								typing rather than using pre-generated templates when using its productivity features,
								finding typing to be more efficient. A participant also mentioned for more integration
								of productivity features which led us to include meeting calendar, to-do list and
								notification as part of the features.
							</p>
							<h4 className="mt-4">Round 2</h4>
							<p>
								Testing with the mid-fidelity prototype showed that users preferred real-time editing of
								task support as well as branded UI to show a better link of task and software. Another
								finding was that the purpose of the bot was unclear which led us to add informational
								buttons and a help page.
							</p>
							<h4 className="mt-4">Round 3</h4>
							<p>
								The main purpose of the final round was to identify any bugs as well as to help finalise
								the design with validation that users were satisfied with the prototype.
							</p>

							<h3 className="mt-12">High Fidelity Design</h3>
							<h4>Landing Page</h4>
							<p>
								An introductory message allowed for users to understand what the bot can help with as
								well as guide them on how to interact/use it.
							</p>
							<Image src={landingpage} className="w-[75%] h-auto max-h-[700px] rounded-2xl m-auto" />
							<h4>Request Processing</h4>
							<p>
								Integration of a split-screen to see information updated in real time as well as the UI
								of the third-party software.
							</p>
							<Image src={requestpage} className="w-[75%] h-auto  max-h-[700px] rounded-2xl m-auto" />
						</div>
						<div id="outcome" className="col-span-12">
							<h3>Further work</h3>
							<p>
								We would have liked to conducted more user testing of the final design to be able to
								integrate quantitative data and analysis to better develop and evaluate the prototype.
								During these user testing, having a diverse group of users will also be beneficial to
								uncover any accessibility pain points in the design.
							</p>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default assistantchatbot;
