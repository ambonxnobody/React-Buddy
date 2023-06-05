import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registrasi from "./pages/Registrasi";
import Profile from "./pages/Profile";

function App() {
	return (
		<div style={{ fontFamily: "Poppins, sans-serif" }}>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/registrasi" element={<Registrasi />} />
					<Route path="/" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
