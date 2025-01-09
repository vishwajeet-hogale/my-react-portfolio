import React from "react";

function article_1() {
	return {
		date: "Oct 8, 2024",
		title: "Delivery Route Optimization using Genetic Algorithms",
		description:
			"Explore how genetic algorithms can be used for optimizing delivery routes, inspired by a course on Foundations of Artificial Intelligence.",
		keywords: [
			"Delivery Route Optimization",
			"Genetic Algorithms",
			"Artificial Intelligence",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of the article on Genetic Algorithms.</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Mar 2, 2024",
		title: "What is RAG (Retrieval Augmented Generation)?",
		description:
			"Learn about Retrieval Augmented Generation (RAG) and its relationship with large language models.",
		keywords: [
			"Retrieval Augmented Generation",
			"RAG",
			"Large Language Models",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of the article on RAG.</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "Feb 27, 2024",
		title: "All you need to know about Spark Dataframe API",
		description:
			"An overview of the Apache Spark DataFrame API, its structure, and its programming interface for data processing.",
		keywords: [
			"Spark DataFrame API",
			"Apache Spark",
			"Data Processing",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of the article on Spark DataFrame API.</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "Feb 20, 2024",
		title: "Spark Adaptive Query Execution",
		description:
			"Understand the features of Spark Adaptive Query Execution that enable query optimization.",
		keywords: [
			"Spark Adaptive Query Execution",
			"Query Optimization",
			"Apache Spark",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of the article on Spark Adaptive Query Execution.</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
