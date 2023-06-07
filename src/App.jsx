import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registrasi from "./pages/Registrasi";
import Profile from "./pages/Profile";
import Artikel from "./pages/Artikel";

function App() {
	return (
		<div style={{ fontFamily: "Poppins, sans-serif" }}>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/registrasi" element={<Registrasi />} />
					<Route path="/profil" element={<Profile />} />
					<Route path="/" element={<Artikel />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
