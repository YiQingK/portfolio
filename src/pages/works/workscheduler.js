import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import managerflow from "public/images/manager.jpg";
import employeeflow from "public/images/employee.jpg";
import clockin from "public/images/clockin.jpg";
import subscription from "public/images/subscription.jpg";
import openshifts from "public/images/openshift.jpg";
import Image from "next/image";

const workscheduler = () => {
	return (
		<>
			<Head>
				<title> Yi Qing | Work Scheduler Application</title>
				<meta name="description" content="description"></meta>
			</Head>
			<main className="flex items-center text-dark w-full min-h-screen dark:text-light">
				<Layout>
					<h5 className=" bg-primary dark:bg-primaryDark text-light inline p-1 rounded">
						Software Development
					</h5>
					<div className="grid grid-cols-12 gap-12 gap-y-24 md:gap-8">
						<div id="title" className="col-span-12">
							<h1>Work Scheduler</h1>
							<h2>Enhancing usability for employees</h2>
							<div className="mt-12 w-full flex gap-12 py-12 md:flex-col md:text-center border-b-2 border-black dark:border-light">
								<div className="w-[50%] md:w-full md:px-4">
									<h4>Overview</h4>
									<p>
										The goal of this project as to develop a new work scheduler application to
										replace the sponsor's existing system which as difficult to use. The team
										created a cross-platform application using React Native which communicates with
										a back-end service built with Node.js and PostgreSQL.
									</p>
								</div>
								<div className="w-[50%] md:w-full md:mt-12 md:px-4">
									<h4>Team Members</h4>
									<p>Yi Qing Khoo, Kai Burkholder, Serena Villanueva, Gordon Mai</p>
									<h4 className="mt-4 md:mt-12">Skills showcased</h4>
									<p>User flow, User persona, Front-end development</p>
								</div>
							</div>
						</div>
						<div id="problem" className="col-span-12">
							<h3>The Problem</h3>
							<p>
								Existing work scheduling system which was on a web-platform did not translate well to a
								mobile version which was hard for users to use on their phones.
							</p>
							<h4>How might we design and develop a system that is easy to use for users?</h4>
						</div>
						<div id="features" className="col-span-12">
							<h3>Features</h3>
							<p>
								Having gathered pain points from our sponsor such as hard-to-use mobile version as well
								as limited messaging feature along with a competitive audit of existing work scheduling
								application, the team decided on the following features to be developed for the duration
								of our project.
							</p>
							<ul className="list-disc mt-4">
								<li className="list-item">
									Cross-platform system that can be used on mobile and laptop
								</li>
								<li className="list-item">
									Messaging system where staff can message each other as well as create group chats
								</li>
								<li className="list-item">Sign up system through invitation only</li>
								<li className="list-item">User profiles for each staff member</li>
								<li className="list-item">Clock-in/Clock-out system</li>
								<li className="list-item">
									Staff have the ability to check and swap shifts while managers have the added
									ability to add and edit shifts
								</li>
								<li className="list-item">
									Monetization feature linked to stripe for use of application
								</li>
								<li className="list-item">Staff ability to block time off</li>
							</ul>
						</div>
						<div id="process" className="col-span-12">
							<h3>Process</h3>
							<p>
								Whilst programming the front and back end code, the team had created user flows to for
								the two main user types of Manager and Employee to understand they steps that are
								required to use the system. This had allowed us to better understand the screens that
								the front-end team had to create.
							</p>
							<div>
								<Image src={managerflow} className="w-[75%] h-auto max-h-[700px] rounded-2xl m-auto" />
								<p className="text-center">Manager User Flow</p>
							</div>
							<div className="mt-12">
								<Image src={employeeflow} className="w-[75%] h-auto max-h-[700px] rounded-2xl m-auto" />
								<p className="text-center">Employee User Flow</p>
							</div>
						</div>
						<div id="result" className="col-span-12">
							<h3>Final screens</h3>
							<p>
								I was in-charge of the clock-in/clock-out system, shift swaping system as well as the
								monetization system of the final application.
							</p>
							<div id="clocking system" className="flex gap-12 md:flex-col">
								<Image
									src={clockin}
									className="w-auto max-h-[700px] m-auto border-2 border-dark rounded-2xl dark:border-light"
								/>
								<Image
									src={openshifts}
									className="w-auto max-h-[700px] m-auto border-2 border-dark rounded-2xl dark:border-light"
								/>
								<Image
									src={subscription}
									className="w-auto max-h-[700px] m-auto border-2 border-dark rounded-2xl dark:border-light"
								/>
							</div>
						</div>
						<div id="future work" className="col-span-12">
							<h3>With more time...</h3>
							<p>
								It would be nice to do some usability testing with the users as the only people that had
								interacted with the app were the student development team. The potential users may have
								a different opinions on the userflow which could help us to improve the application. It
								would also be nice to have the users involved in the design, understanding their needs
								rather than simplying going off the requirements given by our sponsor.
							</p>
							<br></br>
							<p>
								Developing this app, we were more focused on functionality. I would like to improve the
								interface especially for the ‘requests/open shifts’ tab and ‘manage subscription’ page.
								The designs were very basic and similar as well as to also match the company colors
								instead of looking generic.
							</p>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default workscheduler;
