import React from "react";
import { Jumbotron } from "./Jumbotron.jsx";
import {Navbar} from "./Navbar.jsx";
import {Card} from "./Card.jsx"
import { Footer } from "./footer.jsx";


const Home = () => {
	return (
		<div>
			<Navbar/>
			<div className="mx-5">
				<Jumbotron/>
					<div className="row">
						<Card/>
						<Card/>
						<Card/>
						<Card/>
					</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
