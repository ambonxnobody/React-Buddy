import Layout from "../layout/Layout";
import { useState } from "react";
import bullyingIllustration from "../assets/bullying-illustration.jpeg";


function Artikel() {
    const [saveArticle, setSaveArticle] = useState(false);

    const toggleSaveArticle = () => {
        setSaveArticle(!saveArticle);
    }

    return (
        <Layout topbarActive="artikel">
            <style>
                {`
                p {
                    margin-bottom: 0;
                    font-weight: medium;
                }

                .own-container {
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                @media (min-width: 1200px) {
                    .own-container {
                        padding-left: 5rem;
                        padding-right: 5rem;
                    }
                }

                @media (min-width: 2100px) {
                    .own-container {
                        padding-left: 25rem;
                        padding-right: 25rem;
                    }
                }
                `}
            </style>
            <div className="container">
                <img src={bullyingIllustration} alt="Bullying Illustration" style={{ width: "100%" }} />

                <div className="mb-5">
                    <div className="d-flex align-items-center justify-content-between mt-5">
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center me-5" style={{ cursor: "pointer" }}>
                                <img src="https://dummyimage.com/1000x1000/0086CF/dee2e6&text=P" alt="mdo" width="32" height="32" className="rounded-circle me-3" />
                                <p className="mb-0 fw-medium">Putri Tanjung</p>
                            </div>
                            <p className="text-primary mb-0 fw-medium" style={{ cursor: "pointer" }}>Bullying</p>
                        </div>

                        <div className="d-flex flex-end align-items-center">
                            <button className="me-5 btn" onClick={toggleSaveArticle}>
                                <i className={saveArticle ? "fa-solid fa-bookmark text-primary" : "fa-regular fa-bookmark text-primary"} style={{ fontSize: "28px" }}></i>
                            </button>
                            <p className="mb-0 fw-medium">7 Maret 2023</p>
                        </div>
                    </div>

                    <h1 className="fw-bold text-center my-5" style={{ fontSize: "65px" }}>Bullying di Lingkungan Sekolah</h1>
                    <p>Bullying Di Lingkungan Sekolah Merupakan Penindasan Sebagai Bentuk Negatif Interaksi Sosial Yang Terjadi Di Sekolah. Bullying Yang Juga Sering Disebut Dengan Bully Mempunyai Dampak Yang Bisa Sangat Serius Terhadap Perkembangan Peserta Didik. Karena Dapat Mengganggu Perkembangan Secara Mental Dan Psikis.</p>

                    <h2 className="fw-bolder my-5">Apa itu Bullying?</h2>
                    <p>Bullying Adalah Perilaku Agresif Dari Seseorang Atau Sekelompok Orang Karena Ketidakseimbangan Kekuasaan Atau Kekuatan Dengan Tujuan Menindas Seseorang Yang Lebih Lemah. Bullying Jika Diartikan Kedalam Bahasa Indonesia Bisa Berarti Intimidasi, Perundungan Atau Merisak.</p>
                    <p>Korban Intimidasi Ini Biasanya Hanya Individual Karena Sangat Sulit Untuk Melakukan Intimidasi Kedalam Sebuah Kelompok, Walaupun Ini Juga Bisa Terjadi.</p>

                    <h2 className="fw-bolder my-5">Bentuk Bullying di Sekolah</h2>
                    <p>Bentuk-bentuk Intimidasi Dilingkungan Sekolah Dapat Dicontohkan Dalam Banyak Kasus, Tetapi Secara Garis Besar Penulis Menggolongkan Menjadi 2 Bentuk :</p>
                    <p>Intimidasi Verbal Dapat Berupa Mengejek, Menghina, Rasial, Maupun Ancaman. Tujuan Intimidasi Verbal Supaya Korban Menjadi Dikucilkan Atau Dijauhi Peserta Didik Lain.</p>
                    <p>Intimidasi Fisik Dapat Berupa Memukul, Menendang, Mendorong, Meludah, Menggoda, Melecehkan. Tujuan Intimidasi Fisik Ini Biasanya Supaya Korban Melakukan Sesuatu Sesuai Dengan Keinginan Pelaku.</p>

                    <h2 className="fw-bolder my-5">Pelaku Bullying</h2>
                    <p>Pelaku Intimidasi Ini Dapat Dikategorikan Menjadi Dua Yaitu :</p>
                    <p>Intimidasi Yang Dilakukan Sekelompok Peserta Didik, Biasanya Perlakuan Intimidasi Secara Kelompok. Ini Dilakukan Pada Sekolah-Sekolah Tingkat Atas Karena Anak Usia Ini Biasanya Senang Berkelompok. Tujuan Dari Intimidasi Kelompok Ini Untuk Menunjukkan Bahwa Kelompoknya Yang Lebih Atau Paling Dominan.</p>
                    <p>Intimidasi Yang Dilakukan Perorangan Ini Biasanya Dilakukan Pada Tingkat Sekolah Dasar Yang Ingin Menunjukkan Eksistensi Diri Peserta Didik Terhadap Peserta Didik Yang Lain.</p>
                    <p>Meskipun Demikian, Seiring Dengan Perkembangan Teknologi Sehingga Peserta Didik Dapata Mengakses Tontonan Maupun Tuntunan Yang Kurang Pantas Maka Intimidasi Kelompok Ini Bisa Juga Terjadi Pada Tingkat Sekolah Dasar.</p>

                    <h2 className="fw-bolder my-5">Mengatasi Bullying di Sekolah</h2>

                    <h3 className="fw-semibold my-5" style={{ fontSize: "20px" }}>1. Mencegah</h3>
                    <p>Peserta Didik Perlu Diberikan Pengetahuan Tentang Dampak Tindakan Bullying Serta Akibat Yang Bisa Ditimbulkan. Akibat Ini Bisa Berdampak Pada Korban Maupun Pelaku. Untuk Memperkuat Pengetahuan Juga Perlu Diajarkan Pendidikan Budi Pekerti Kepada Peserta Didik.</p>
                    <p>Orang Tua Peserta Didik Juga Bisa Memberikan Masukan Kepada Guru Jika Mengetahui Anaknya Atau Anak Lain Menjadi Korban Maupun Berpotensi Menjadi Korban.</p>

                    <h3 className="fw-semibold my-5" style={{ fontSize: "20px" }}>2. Menindaklanjuti</h3>
                    <p>Guru Dapat Melakukan Pemantauan Kepada Peserta Didik Yang Mempunyai Kepribadian Yang Janggal. Hasil Pemantauan Guru Berdasarkan Ciri-Ciri Pelaku Maupun Korban Diatas Dapat Menjadi Bahan Untuk Memberikan Pendampingan Kepada Seluruh Peserta Didik.</p>
                    <p>Sekolah Dalam Lingkup Yang Lebih Luas Juga Dapat Mengakkan Aturan Dan Disiplin Melalui Contoh-Contoh Kebiasaan Baik Yang Dapat Menjauhkan Tindakan Intimidasi Ini Dari Seluruh Peserta Didik.</p>
                </div>
            </div>

            <div style={{ backgroundColor: "#FC4242", paddingTop: "5rem", paddingBottom: "5rem" }} className="row align-items-center own-container">
                <div className="col-12 col-xl-6 d-flex flex-column me-auto mb-5 mb-xl-0" style={{ gap: "1rem" }}>
                    <h4 style={{ fontSize: "28px" }} className="mb-0 text-white fw-bold">Disclaimer</h4>
                    <p className="text-white">Jika Anda/orang disekitan Anda sedang atau pernah menjadi korban bullying Layanan ini dapat membantu Anda.</p>
                    <p className="text-white">Silahkan klik layanan pelaporan.</p>
                </div>

                <div className="col-12 col-xl-6 text-center">
                    <button className="btn btn-lg btn-light" style={{ minWidth: "80%", color: "#FC4242" }}>Layanan Pelaporan</button>
                </div>
            </div>
        </Layout>
    )
}

export default Artikel;