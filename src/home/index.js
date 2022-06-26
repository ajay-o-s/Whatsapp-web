import "../../css/Home.css";
import React from "react";

const Home = () => {
    const handleLogout = () => {
		setUser({});
		localStorage.clear();
	};
	return (
		<div className="Home">
			<p className="Home__desc">
                Home 💖
			</p>
		</div>
	);
};

export default Home;