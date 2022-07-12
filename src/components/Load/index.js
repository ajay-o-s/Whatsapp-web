import "../../css/Load.css";
import React from "react";
import Icon from "../../Icon";

const Loader = ({ done }) => {
	return (
		<div className="loader">
		<Icon id="whatsapp" className="loader__logo" />
			<div className="loader__logo-wrapper">
				
			</div>
			<div
				className={`loader__progress ${done ? "loader__progress--done" : ""}`}
			></div>
			<h1 className="loader__title"> <strong>KEERTHANA BOT</strong></h1>
			<p className="loader__desc">
				<Icon id="lock" className="loader__icon" />
				End-to-end encrypted. Made by Ajay o s With 💖
			</p>
		</div>
	);
};

export default Loader;