import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				style = {{marginBottom: '20px'}}
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body" >
						<div className="work">
							<img
								src="./Khoury.png"
								alt="Khoury"
								className="work-image"
							/>
							<div className="work-title">Khoury College of Computer Sciences</div>
							<div className="work-subtitle">
								Graduate Teaching Assistant
							</div>
							<div className="work-duration">Jan 2024 – Present</div>
						</div>

						<div className="work">
							<img
								src="./mercedes-benz.jpeg"
								alt="mercedes-benz"
								className="work-image"
							/>
							<div className="work-title">Mercedes-Benz Research and Development India</div>
							<div className="work-subtitle">
								Data Analyst
							</div>
							<div className="work-duration">Aug 2022 – Jul 2024</div>
						</div>

						<div className="work">
							<img
								src="./multilex.jpeg"
								alt="multilex"
								className="work-image"
							/>
							<div className="work-title">Multilex Technology</div>
							<div className="work-subtitle">
								Software Engineering Intern
							</div>
							<div className="work-duration">Oct 2020 – Jul 2022</div>
						</div>

					</div>
				}
			/>

			<Card

				icon={faBriefcase}
				title="Open Source Work"
				body={
					<div className="works-body">
						{/* <div className="work">
							<img
								src="./yoja-ai.png"
								alt="yoja-ai"
								className="work-image"
							/>
							<div className="work-title">Yoja AI</div>
							<div className="work-subtitle">
								Open Source LLM Developer
							</div>
							<div className="work-duration">Nov 2024 – Dec 2024</div>
						</div> */}

						<div className="work">
							<img
								src="./whywaste.png"
								alt="mercedes-benz"
								className="work-image"
							/>
							<div className="work-title">Why Waste?</div>
							<div className="work-subtitle">
								Frontend Engineer
							</div>
							<div className="work-duration">May 2024 – Jul 2024</div>
						</div>

						

					</div>
				}
			/>
		</div>
	);
};

export default Works;
