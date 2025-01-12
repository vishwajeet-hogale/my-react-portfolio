import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				style={{ marginBottom: '20px' }}
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
								Graduate Teaching Assistant for DS4440 - Practical Neural Networks Course
							</div>
							<div className="work-duration">Jan 2024 – Present</div>
							<div className="work-details">
								<ul>
									<li>Graded and reviewed assignments for the course.</li>
									<li>Built course python notebooks covering topics from Neural Networks to Autoencoders.</li>
									<li>Held office hours to help over 60 students with course related queries and issues.</li>
								</ul>
							</div>
						</div>
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
							<div className="work-details">
								<ul>
									<li><strong>Built the mobile UI using Flutter</strong> for UNICEF’s water conservation initiative, <strong>enabling over 10,000 students</strong> to track their water usage and participate in conservation challenges, contributing to a large-scale sustainability effort.</li>
									<li><strong>Optimized Flutter mobile UI performance</strong>, <strong>reducing page load time by 40%</strong> through efficient state management, minimized widget rebuilds, and asynchronous data loading.</li>
								</ul>
							</div>
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
							<div className="work-details">
								<ul>
									<li><strong>Led MLOPs experiments</strong> employing XGBoost and K-Means Clustering ML models on Azure Machine Learning to automate ServiceNow ticket allocation, achieving a <strong>20% reduction in support costs</strong> and faster ticket resolutions.</li>
									<li><strong>Architected a web app</strong> using Streamlit and Python, integrating the <strong>Llama model</strong> to enable business users to interact with procurement data through conversational queries and display <strong>visualizations and insights</strong>.</li>
									<li><strong>Engineered a risk analysis dashboard</strong> using Power BI and Gemini LLM to analyze location-based Twitter feeds, enabling assessment of potential risks at production plants worldwide, achieving a <strong>10% improvement in overall procurement risk coverage</strong>.</li>
									{/* <li><strong>Engineered a health monitoring dashboard</strong> for Mercedes-Benz’s procurement operations, integrating data from 50+ systems to track ticket trends, bug rates, and resolution times, enabling C-suite stakeholders to make informed strategic decisions.</li>
									<li><strong>Optimized Power BI Data Model</strong> by implementing various strategies, reducing load time from <strong>26 seconds to 7 seconds</strong>, resulting in a <strong>73.08% improvement</strong>.</li> */}

								</ul>
							</div>
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
							<div className="work-details">
								<ul>
									<li><strong>Developed a React.js & Python-based web platform</strong> automating <strong>80% of IPO company identification</strong> by scraping 150+ news sites and leveraging <strong>BERT Q&A capability</strong> for global stock exchange updates.</li>
									<li><strong>Engineered on-premises BERT Q&A training script</strong> in PyTorch, improving IPO company prediction by <strong>20%</strong>.</li>
									<li><strong>Implemented multi-threading in Python</strong> to optimize Luigi pipelines, reducing execution time from <strong>75 minutes to 25 minutes</strong>, resulting in a significant <strong>66% improvement</strong> in execution time.</li>
									<li><strong>Devised a ranking system to extract financial bond data from PDFs</strong> using Gemini, improving information retrieval by <strong>21%</strong>.</li>
									<li><strong>Managed weekly releases of BERT model</strong> for IPO and financial bond data extraction, ensuring high accuracy and model stability.</li>
									{/* <li><strong>Engineered KPIs for data quality, pipeline monitoring, and model validation</strong>, enhancing platform automation, stability, and overall efficiency by <strong>24%</strong>.</li> */}
								</ul>
							</div>
						</div>

					</div>
				}
			/>

		</div>
	);
};

export default Works;
