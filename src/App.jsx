import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registrasi from "./pages/Registrasi";
import Profile from "./pages/Profile";

function App() {
	return (
		<div style={{ fontFamily: "Poppins, sans-serif" }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/registrasi" element={<Registrasi />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
