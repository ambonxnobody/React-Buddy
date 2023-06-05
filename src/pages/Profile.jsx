import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { useState } from "react";

function Profile() {
    const [editProfile, setEditProfile] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const toggleEditProfile = () => {
        setEditProfile(!editProfile);
    }

    return (
        <Layout>
            <div className="pt-5 px-5 row" style={{ width: "100vw" }}>
                {/* height: "100vh" */}
                <div className="col-12 col-md-3 mb-5">
                    <div className="card">
                        <div className="card-header d-flex flex-column align-items-center pt-5" style={{ backgroundColor: "white" }}>
                            <img src="https://dummyimage.com/1000x1000/868e96/dee2e6&text=IS" className="mb-3" alt="Photo Profile" style={{ height: "150px", width: "150px", borderRadius: "100%" }} />
                            <h4 className="fw-bold" style={{ fontSize: "1.5rem" }}>Ikin Sugiharto</h4>
                            <p className="text-secondary">Mahasiswa</p>
                        </div>
                        <div className="card-body d-flex flex-column align-items-center" style={{ gap: ".5rem" }}>
                            <button onClick={toggleEditProfile} className="btn" style={{ color: "#0D6EFD", cursor: "pointer" }}><i className="fa-solid fa-pen me-2"></i>Edit Profile</button>
                            <Link to={"/login"} style={{ color: "black", textDecoration: "none" }}><i className="fa-solid fa-right-from-bracket me-2"></i>Keluar</Link>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-9 mb-5">
                    <div className="card" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
                        {/* paddingRight: "3rem", paddingLeft: "3rem",  */}
                        <div className="card-header px-5 py-3" style={{ backgroundColor: "white", fontSize: "2rem", fontWeight: "bold" }}>Edit Profile</div>
                        <div className="card-body px-5">
                            <div className="row mb-3">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Nama Lengkap</label>
                                    <input disabled={!editProfile} type="text" className="form-control" id="exampleFormControlInput1" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                    <input disabled={!editProfile} type="email" className="form-control" id="exampleFormControlInput1" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">No. Telepon Aktif</label>
                                    <input disabled={!editProfile} type="text" className="form-control" id="exampleFormControlInput1" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Kata Sandi</label>
                                    <div style={{ position: 'relative' }}>
                                        <input disabled={!editProfile} type={showPassword ? 'text' : 'password'} className="form-control" id="exampleFormControlInput1" />
                                        {editProfile ?
                                            <i onClick={togglePassword} className={!showPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}></i> :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Konfirmasi Kata Sandi</label>
                                    <div style={{ position: 'relative' }}>
                                        <input disabled={!editProfile} type={showConfirmPassword ? "text" : "password"} className="form-control" id="exampleFormControlInput1" />
                                        {editProfile ?
                                            <i onClick={toggleConfirmPassword} className={!showConfirmPassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"} style={{ position: 'absolute', right: '10px', top: '10px', cursor: 'pointer' }}></i> :
                                            null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer px-5" style={{ backgroundColor: "white" }}>
                            <button className="btn btn-primary">Ubah Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Profile;