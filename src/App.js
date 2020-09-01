import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Content from "./components/Content";
import Navbar from "./layouts/Navbar";

function App() {
	const [nav, setNav] = useState(false);
	const displayNav = () => {
		setNav(!nav);
	};
	const [scroll, setScroll] = useState(false);
	const [name, setName] = useState("");

	const scrollSet = (e) => {
		setScroll(e);
	};
	function scrollers(e) {
		setName(e);
		setScroll(true);
	}
	return (
		<div className="App">
			<Helmet>
				<meta charset="utf-8" />
				<title>KingSolo</title>
				<meta name="keywords" content="Solomon, Yakubu, Kingsolo," />
				<meta name="author" content="Yakubu Solomon" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="My personal portfolio Website" />
			</Helmet>
			<Navbar displayNav={displayNav} nav={nav} scrollers={scrollers} />
			<div className="bigContainer">
				<Content
					nav={nav}
					scroll={scroll}
					scrollSet={scrollSet}
					name={name}
					scrollers={scrollers}
					displayNav={displayNav}
				/>
			</div>
		</div>
	);
}

export default App;
