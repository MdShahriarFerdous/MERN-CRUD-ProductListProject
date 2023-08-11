import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/navbar/NavBar";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route index path="/" element={<ReadPage />} />
				<Route path="/create" element={<CreatePage />} />
				<Route path="/update/:id" element={<UpdatePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
