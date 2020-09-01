import React from "react";

import "../App.css";

const Options = (props) => {
	return (
		<div className={props.nav ? "optCon" : "optCon close"}>
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
const buttonStyles = {
	borderWidth: "4px",
	borderColor: "#1464f4",
};
export default Options;
