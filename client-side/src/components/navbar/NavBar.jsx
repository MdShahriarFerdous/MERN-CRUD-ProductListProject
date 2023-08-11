import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container">
				{" "}
				<p className="navbar-brand">Product Collection</p>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					{" "}
					<span className="navbar-toggler-icon" />{" "}
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarTogglerDemo02"
				>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item me-4">
							<NavLink
								to="/"
								className={({ isActive, isPending }) =>
									isActive
										? "active-link nav-link"
										: "pending-link nav-link"
								}
							>
								Product Lists
							</NavLink>{" "}
						</li>

						<li className="nav-item me-4">
							<NavLink
								to="/create"
								className={({ isActive, isPending }) =>
									isActive
										? "active-link nav-link"
										: "pending-link nav-link"
								}
							>
								Create Product
							</NavLink>{" "}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
