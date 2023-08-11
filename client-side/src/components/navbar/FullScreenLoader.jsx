import React from "react";
import loader from "../../assets/img/spinner.svg";
import "./loader.css";

const FullScreenLoader = () => {
	return (
		<div className="ProcessingDiv">
			<div className="center-screen">
				<img className="loader-size" src={loader} />
			</div>
		</div>
	);
};

export default FullScreenLoader;
