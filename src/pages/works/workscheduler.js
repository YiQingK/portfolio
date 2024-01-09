import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import calendar from "../../../public/images/Cal.jpg";
import Image from "next/image";
import ManagerFlow from "../../../public/images/manager.jpg";
import EmployeeFlow from "../../../public/images/employee.jpg";

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
					<div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-16 sm:gap-x-0">
						<div className="col-span-8">
							<h1>Work Scheduler</h1>
							<h2>Enhancing usability for employees</h2>
							<h3 className="font-bold">Problem</h3>
							<h4>
								Existing work scheduling system which was on a web-platform did not translate well to a
								mobile version which was hard for users to use on their phones.
								<br />
								How might we design and develop a system that is easy to use for users?
							</h4>
							<h3 className="font-bold">Solution</h3>
							<h4>
								Created an easy to use cross-platform mobile application to help organise a company's
								work schedule. The app was created using React Native for a cross-platform UI which
								communicates with a back-end service built with Node.js and PostgreSQL.
							</h4>
						</div>
						<div className="col-span-4">
							<Image
								src={calendar}
								alt="calendar image"
								className="w-full h-auto rounded-2xl border-2 border-solid border-dark"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</div>
						<div className="col-span-12">
							<h3 className="font-bold">Pain Points</h3>
							<ul className="list-disc">
								<li className="list-item">Current system is not mobile friendly</li>
								<li className="list-item">
									Limited messaging system where managers can message staff and broadcasts from
									managers affect all staff members.
								</li>
							</ul>

							<h3 className="font-bold">Features</h3>
							<h4>
								The list of features were decided based off pain points and basic work scheduling
								application features
							</h4>
							<ul className="list-disc">
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

							<h3 className="font-bold">Learning Points</h3>
							<ul className="list-disc">
								<li className="list-item">Learning how to develop a user journey and user flow </li>
							</ul>

							<h3 className="font-bold">With more time</h3>
							<ul className="list-disc">
								<li className="list-item font-semibold">Involving users</li>
								<p>
									It would be nice to do some usability testing with the users as the only people that
									had interacted with the app were the student development team. The potential users
									may have a different opinions on the userflow which could help us to improve the
									application. It would also be nice to have the users involved in the design,
									understanding their needs rather than simplying going off the requirements given by
									our sponsor.
								</p>
								<li className="list-item font-semibold">Improving interface design. </li>
								<p>
									Developing this app, we were more focused on functionality. I would like to improve
									the interface especially for the ‘requests/open shifts’ tab and ‘manage
									subscription’ page. The designs were very basic and similar.
								</p>
							</ul>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default workscheduler;
