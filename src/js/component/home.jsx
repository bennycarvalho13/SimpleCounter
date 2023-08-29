import React from "react";

//include images into your bundle
import Counter from "../component/counter.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid text-center bg-dark py-3">
			<Counter></Counter>
		</div>
	);
};

export default Home;
