import React from "react";
import "../../css/Load.css";
import whatsapp_svg from '../../svg/whatsapp.svg';
const Loader = ({ done }) => {
	return (
		<div className="loader">
			<div className="loader__logo-wrapper">
				<div id="whatsapp" className="loader__logo" />
			</div>
			<div
				className={`loader__progress ${done ? "loader__progress--done" : ""}`}
			></div>
			<h1 className="loader__title"> Whatsapp</h1>
			<p className="loader__desc">
				<div id="lock" className="loader__icon" />
				End-to-end encrypted. Made by Ajay-o-s With 💖
			</p>
		</div>
	);
};

export default Loader;