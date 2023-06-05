import { Link } from "react-router-dom";
import buddy from "../assets/buddy.png";
import signup from "../assets/signup.png";

function Registrasi() {
	return (
		<div>
			<div>
				<div className="container-md">
					<div className="min-vh-100 d-flex justify-content-center align-items-center w-100">
						<div
							className=" shadow d-lg-flex justify-content-between gap-1"
							style={{ width: "900px" }}>
							<div className="w-50 d-lg-flex d-none justify-content-center items-center py-5 px-5">
								<img src={signup} alt="" className="ratio ratio-1x1" />
							</div>
							<div
								className="flex-grow-1 px-md-5 px-3 py-5"
								style={{ backgroundColor: "#f6f9ff" }}>
								<div className="d-flex align-items-center justify-content-start gap-2 mb-4">
									<img src={buddy} alt="" style={{ height: "40px" }} />
									<span className="text-black">Buddy</span>
								</div>
								<span className="fw-bold lh-1 fs-1">Daftar</span>
								<p className="mb-3">
									<span style={{ color: "#838383" }}>Udah punya akun?</span>{" "}
									<Link to="/login" className="text-decoration-none fw-bold">
										Masuk Sekarang
									</Link>
								</p>
								<form>
									<div className="mb-2 text-black">
										<label htmlFor="Nama" className="form-label">
											Nama Lengkap
										</label>
										<input
											type="text"
											className="form-control"
											id="Nama"
											placeholder="Masukkan Nama Lengkap"
										/>
									</div>
									<div className="mb-2 text-black">
										<label htmlFor="email" className="form-label">
											Email
										</label>
										<input
											type="email"
											className="form-control"
											id="email"
											placeholder="Masukkan email"
										/>
									</div>
									<div className="mb-3 text-black">
										<label htmlFor="password" className="form-label">
											Kata Sandi
										</label>
										<input
											type="password"
											className="form-control"
											id="password"
											placeholder="Masukkan Kata Sandi"
										/>
									</div>
									<Link to={"/"}
										type="button"
										className="btn btn-primary block w-100 text-white">
										Daftar
									</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Registrasi;
