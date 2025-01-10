import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";

const Article = (props) => {
	const { date, title, description, link } = props;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				{/* <Link to={link}> */}
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						<a href={link}>
						<div className="article-link">
							Read Article{" "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
							
						</div>
						</a>
					</div>
				{/* </Link> */}
			</div>
		</React.Fragment>
	);
};

export default Article;
