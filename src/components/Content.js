import React, { useState } from "react";

import "../App.css";
import Options from "./Options";
import Contact from "./Contact";

import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import VizSensor from "react-visibility-sensor";
import TypingEffect from "react-typing-effect";
import { scroller } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faFacebook,
	faTwitter,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
	faPhone,
	faEnvelope,
	faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
	const skills = [
		"#HTML",
		"#CSS",
		"#Javascript",
		"#Reactjs",
		"#Redux",
		"#Jquery",
		"#Bootstrap",
		"#Saas",
		"#Node.js",
		"#Express",
		"#Next.js",
		"#MongoDb",
		"#MySQL",
		"#Firebase",
		"#C++",
		"#Java",
		"#Phonegap",
		"#Ionic",
		"#Cordova",
	];
	const skillProgress = [
		{ skill: "HTML,CSS,Bootstrap&SASS", id: 1, rate: 96 },
		{ skill: "Javascript & Jquery", id: 2, rate: 92 },
		{ skill: "Node.js/Express & Next.js", id: 3, rate: 75 },
		{ skill: "ReactJs/Redux", id: 4, rate: 90 },
		{ skill: "MongoDB,MySQL & Firebase", id: 5, rate: 80 },
		{ skill: "Cordova,Phonegap&Ionic", id: 6, rate: 85 },
		{ skill: "C++ & Java", id: 7, rate: 75 },
	];

	const progColor = "#6d9bf1 ";
	return (
		<div>
			<div style={{}} className="aboutP">
				<div
					style={{
						borderBottomStyle: "solid",

						padding: "none",
					}}
					className="aboutStyles"
				>
					My Skills
				</div>
			</div>
			<p></p>
			<div className="skillContainer">
				{skills.map((items, index) => (
					<div className="skills" key={index}>
						{items}
					</div>
				))}
			</div>
			<div>
				<div
					style={{
						borderBottomStyle: "solid",
						borderWidth: "5px",
						textAlign: "left",
						width: "100px",
						paddingTop: "10px",
						fontSize: "18px",
						marginBottom: "15px",
					}}
					className="aboutStyles"
				>
					<strong>In Details</strong>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}
				>
					{skillProgress.map((items) => (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								width: "100%",
							}}
							key={items.id}
						>
							<div
								style={{
									textAlign: "center",
									margin: "3px",
									marginTop: "10px",
								}}
								className="skillProgress"
							>
								{items.skill}
							</div>

							<Progress
								percent={items.rate}
								status="active"
								theme={{
									active: {
										color: progColor,
										width: "20px",
										symbol: (
											<div className="progressFont">{`${items.rate}%`}</div>
										),
									},
								}}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

function Content(props) {
	if (props.scroll) {
		scroller.scrollTo(props.name, {
			duration: 500,
			delay: 100,
			smooth: true,

			offset: -100,
		});
		props.displayNav();
		props.scrollSet(false);
	}

	const [aboutShow, setAboutShow] = useState(false);
	const [skillShow, setSkillShow] = useState(false);
	const [projectShow] = useState(false);
	const [contactShow, setContactShow] = useState(false);
	const [homeShow, setHomeShow] = useState(false);

	return (
		<div className="container" style={{}}>
			<Options
				nav={props.nav}
				scrollers={props.scrollers}
				aboutShow={aboutShow}
				skillShow={skillShow}
				projectShow={projectShow}
				contactShow={contactShow}
				homeShow={homeShow}
			/>
			<VizSensor
				onChange={(isVisible) => {
					setHomeShow(isVisible);
				}}
			>
				<div className="profile">
					<div className="imgCon">
						<img
							src={require("../images/profile.jpg")}
							style={{
								width: "150px",
								height: "150px",
								borderRadius: "50%",
								borderStyle: "solid",
								borderColor: "#000",
								borderWidth: "4px",
							}}
							alt="profile"
						/>
					</div>

					<p style={{}} className="intro">
						Hi!
						<span role="img" aria-labelledby="jsx-a11y/accessible-emoji">
							&#128075;
						</span>
						, I'm{" "}
						<strong
							style={{
								color: "#000",
								paddingLeft: "5px",
								margin: "0",
							}}
						>
							Yakubu Solomon
						</strong>
					</p>

					<div style={{ marginBottom: "12px" }} className="typing">
						<TypingEffect
							text={[
								"I'm a Full-Stack web developer",
								"I'm focused....",
								"Creative....",
								"Determined....",
							]}
							speed={15}
							eraseDelay={1500}
						/>
					</div>
					<p style={{ margin: "5px" }}></p>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "auto",
							marginBottom: "20px",
						}}
					>
						<a href="http://www.facebook.com/solomon.yakubu.313">
							<FontAwesomeIcon
								icon={faFacebook}
								className="socialIcon"
								size="2x"
								style={{ color: "#0d4f8b" }}
							/>
						</a>
						&nbsp; &nbsp;
						<a href="http://www.twitter.com/@King__Solo">
							<FontAwesomeIcon
								icon={faTwitter}
								className="socialIcon"
								size="2x"
								style={{ color: "#5cacee" }}
							/>
						</a>
						&nbsp; &nbsp;
						<a href="http://www.instagram.com/solomonyakubu34">
							<FontAwesomeIcon
								icon={faInstagram}
								className="socialIcon"
								style={{
									backgroundColor: "#d6249f",
									borderRadius: "5px",
									color: "#fff",
									paddingLeft: "2px",
									paddingRight: "2px",
									background:
										"radial-gradient(circle at 30% 107%, #fdf497 0%,#fdf497 5%,#fd5949 45%,#d6249f 60%,#285aeb 90%)",
								}}
								size="2x"
							/>
						</a>
						&nbsp; &nbsp;
						<a href="http://www.github.com/SolomonYakubu">
							<FontAwesomeIcon
								icon={faGithub}
								className="socialIcon"
								size="2x"
								style={{ color: "#000" }}
							/>
						</a>
						&nbsp; &nbsp;
					</div>

					<div style={{ padding: "5px" }} className="profileStyles">
						<div style={{ margin: "5px" }}>
							<a
								href="tel:+2348108405421"
								style={{ textDecoration: "none" }}
								className="conStyle set"
							>
								<FontAwesomeIcon
									icon={faPhone}
									className="socialIcon b"
									size="lg"
									style={{ marginRight: "10px" }}
								/>
								<div style={{ alignSelf: "center" }}>+234 8108405421</div>
							</a>
						</div>

						<div style={{ margin: "5px" }}>
							<a
								href="mailto:soloyaks.sy@gmail.com"
								style={{
									textDecoration: "none",
									// display: "flex",
									// // justifyContent: "space-around",
									// alignItems: "center",
								}}
								className="conStyle set"
							>
								<FontAwesomeIcon
									icon={faEnvelope}
									className="socialIcon b"
									size="lg"
									style={{ marginRight: "10px" }}
								/>
								<div style={{ alignSelf: "center" }}>soloyaks.sy@gmail.com</div>
							</a>
						</div>
						<div style={{ margin: "5px" }}>
							<FontAwesomeIcon
								icon={faMapMarker}
								className="socialIcon b"
								size="lg"
							/>
							&nbsp;
							<b className="conStyle" style={{ fontWeight: "200" }}>
								&nbsp; FCT, Nigeria.
							</b>
						</div>
					</div>
				</div>
			</VizSensor>
			<div className="contentDiv">
				<div className="divCon" style={{}}>
					<VizSensor
						partialVisibility
						onChange={(isVisible) => {
							setAboutShow(isVisible);
						}}
					>
						<div
							style={{
								paddingBottom: "10px",
							}}
							className="aboutP"
						>
							<div
								style={{
									borderBottomStyle: "solid",

									padding: "none",
								}}
								className="aboutStyles"
							>
								About Me
							</div>
							<p style={{ textAlign: "center" }}>
								I am a creative full-stack web developer and a Computer
								Engineering undergraduate. i have a great passion for software
								development and programming. i am proficient in Javascript and
								it's libraries/frameworks such as ReactJs, JQuery,
								Node.js/Expressjs etc. I am also knowledgeable with backend
								technologies like MYSQL and MongoDB. I offer 2 years of
								development experience. I learn fast and easily adapt to new
								technologies. I do not believe in failure, I always work hard to
								meet my goals.
							</p>
						</div>
					</VizSensor>
				</div>

				<div className="divCon" style={{}}>
					<div className="mySkill" style={{ paddingBottom: "25px" }}>
						<VizSensor
							partialVisibility
							onChange={(isVisible) => {
								setSkillShow(isVisible);
							}}
						>
							<Skills />
						</VizSensor>
					</div>
				</div>

				<div className="divCon" style={{}}>
					<div className="contact" style={{ paddingBottom: "15px" }}>
						<VizSensor
							partialVisibility
							onChange={(isVisible) => {
								setContactShow(isVisible);
							}}
						>
							<Contact />
						</VizSensor>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
