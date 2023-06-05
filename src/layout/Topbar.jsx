import { Link } from "react-router-dom";
import buddy from "../assets/buddy.png";

function Topbar() {
    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom" style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
            <div className="col-md-3 mb-2 mb-md-0">
                <Link to={"/"} className="d-flex align-items-center link-body-emphasis text-decoration-none">
                    <img src={buddy} alt="Buddy Image" className="me-2" style={{ height: "32px" }} />
                    <h4 className="fw-bold mb-0">Buddy</h4>
                </Link>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><a style={{ cursor: "pointer", color: "black" }} className="nav-link px-2">Beranda</a></li>
                {/* link-secondary */}
                <li><a style={{ cursor: "pointer", color: "black" }} className="nav-link px-2">Pelaporan</a></li>
                <li><a style={{ cursor: "pointer", color: "black" }} className="nav-link px-2">Artikel</a></li>
            </ul>

            <div className="col-md-3" style={{ display: "flex", flexDirection: "row-reverse" }}>
                <div className="dropdown text-end" style={{ width: "fit-content" }}>
                    <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Akun
                    </a>
                    <ul className="dropdown-menu text-small">
                        {/* <li><a style={{ cursor: "pointer" }} className="dropdown-item">New project...</a></li>
                        <li><a style={{ cursor: "pointer" }} className="dropdown-item">Settings</a></li> */}
                        <li><Link to={"/"} className="dropdown-item">Profil</Link></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><Link to={"/login"} className="dropdown-item">Keluar</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Topbar;