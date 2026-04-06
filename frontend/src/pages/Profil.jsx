import { Link } from "react-router-dom";
import profil1 from "../assets/profil1.jpg"; // ganti sesuai foto kamu

function Profil() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFF8F0" }}>
      <div
        style={{
          backgroundColor: "#8B2500",
          padding: "24px 80px",
          color: "white",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "14px",
            opacity: 0.8,
          }}
        >
          ← Kembali
        </Link>

        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginTop: "8px" }}>
          Profil Saya
        </h1>
      </div>

      <div style={{ padding: "40px 80px" }}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <img
              src={profil1}
              alt="profil"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #E8640C",
              }}
            />
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>Nama</p>
              <p style={{ fontSize: "16px", fontWeight: "bold", margin: 0 }}>
                Andri (ganti nama kamu)
              </p>
            </div>

            <div>
              <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>
                Email
              </p>
              <p style={{ fontSize: "16px", margin: 0 }}>emailkamu@gmail.com</p>
            </div>

            <div>
              <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>
                Asal Sekolah
              </p>
              <p style={{ fontSize: "16px", margin: 0 }}>
                SMA Negeri (isi sendiri)
              </p>
            </div>

            <div>
              <p style={{ fontSize: "13px", color: "#888", margin: 0 }}>
                Kelas
              </p>
              <p style={{ fontSize: "16px", margin: 0 }}>XII IPA 1</p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "32px",
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#8B2500", marginBottom: "12px" }}>Karya Saya</h2>

          <p style={{ color: "#888", fontSize: "14px" }}>
            Belum ada karya. Mulai unggah karya budaya Anda!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profil;
