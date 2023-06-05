import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registrasi from "./pages/Registrasi";

function App() {
	return (
		<div style={{ fontFamily: "Poppins, sans-serif" }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/registrasi" element={<Registrasi />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
