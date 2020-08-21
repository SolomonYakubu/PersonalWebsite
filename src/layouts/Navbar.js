import React from "react";
import {
	faBars,
	faTimes,
	faHome,
	faLightbulb,
	faListAlt,
	faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";

function Navbar(props) {
	return (
		<div className="header">
			<div
				style={{
					alignSelf: "center",
					alignContent: "flex-start",
					position: "absolute",
					left: "15px",
					zIndex: "4",
					width: "100px",

					height: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",

					padding: "5px",
				}}
			>
				<p style={{}} className="name">
					KingSolo
				</p>
			</div>

			<span className="linkDiv">
				<button
					className="link"
					value="aboutStyles"
					onClick={(e) => props.scrollers(e.target.value)}
				>
					<FontAwesomeIcon icon={faHome} className="icon" />
					&nbsp; HOME
				</button>
				<button
					className="link"
					value="mySkill"
					onClick={(e) => props.scrollers(e.target.value)}
				>
					<FontAwesomeIcon icon={faLightbulb} className="icon" />
					&nbsp; SKILLS
				</button>
				<button
					className="link"
					value="projects"
					onClick={(e) => props.scrollers(e.target.value)}
				>
					<FontAwesomeIcon icon={faListAlt} className="icon" />
					&nbsp;PROJECTS
				</button>
				<button
					className="link"
					value="contact"
					onClick={(e) => props.scrollers(e.target.value)}
				>
					<FontAwesomeIcon icon={faPhoneSquare} className="icon" />
					&nbsp;CONTACT
				</button>
				<button
					className="btnOpt"
					style={{
						position: "absolute",
						right: "20px",
						alignSelf: "center",
						backgroundColor: "#1464f4",
						borderColor: "#fff",
						borderStyle: "solid",
						outline: "none",
						zIndex: "2",

						borderRadius: "5px",
						textAlign: "center",
						borderWidth: "1.2px",
						//padding: "3px",
						paddingTop: "5px",
						paddingBottom: "20px",
						width: "32px",
						height: "25px",
					}}
					onClick={props.displayNav}
				>
					<FontAwesomeIcon
						icon={props.nav ? faTimes : faBars}
						style={{ color: "#fff" }}
						size="1x"
					/>
				</button>
			</span>
		</div>
	);
}

export default Navbar;
