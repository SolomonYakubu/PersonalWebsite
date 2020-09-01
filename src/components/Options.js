import React from "react";
import { Helmet } from "react-helmet";
import "../App.css";

const Options = (props) => {
	return (
		<div className={props.nav ? "optCon" : "optCon close"}>
			<Helmet>
				<meta charset="utf-8" />
				<title>KingSolo</title>
				<meta name="keywords" content="Solomon, Yakubu, Kingsolo," />
				<meta name="author" content="Yakubu Solomon" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="My personal portfolio Website" />
			</Helmet>
			<div className="opt">
				<button
					value="profile"
					className="optLink"
					onClick={(e) => props.scrollers(e.target.value)}
					style={{
						borderBottomStyle:
							props.aboutShow || props.homeShow ? "solid" : null,
						borderWidth: "4px",
						borderColor: "#1464f4",
						padding: 0,
					}}
				>
					HOME
				</button>

				<button
					className="optLink"
					value="mySkill"
					onClick={(e) => props.scrollers(e.target.value)}
					style={{
						borderBottomStyle: props.skillShow ? "solid" : null,
						borderWidth: "4px",
						borderColor: "#1464f4",
						padding: 0,
					}}
				>
					SKILLS
				</button>

				<button
					value="projects"
					onClick={(e) => props.scrollers(e.target.value)}
					className="optLink"
				>
					PROJECTS
				</button>

				<button
					value="contact"
					onClick={(e) => props.scrollers(e.target.value)}
					className="optLink"
					style={{
						borderBottomStyle: props.contactShow ? "solid" : null,
						borderWidth: "4px",
						borderColor: "#1464f4",
						padding: 0,
					}}
				>
					CONTACT
				</button>
			</div>
		</div>
	);
};

export default Options;
