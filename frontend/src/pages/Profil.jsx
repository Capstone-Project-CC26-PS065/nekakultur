import { useState } from "react";
import { Link } from "react-router-dom";
import profil1 from "../assets/profil1.jpg";
import pensil from "../assets/pensil.png";
import gambar from "../assets/gambar.png";

function Profil() {
  const [profil] = useState({
    nama: "Pecinta Budaya",
    username: "pecintabudaya",
    bio: "Melestarikan budaya Indonesia",
  });

  return (
    <div style={{ backgroundColor: "#F5EBDD", minHeight: "100vh" }}>
      <div style={{ padding: "24px 80px" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <img
              src={profil1}
              alt="profil"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#333",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
              >
                {profil.nama}
              </h3>
              <p style={{ margin: "4px 0", color: "#888", fontSize: "14px" }}>
                @{profil.username}
              </p>
              <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                {profil.bio}
              </p>
            </div>
          </div>

          <Link to="/edit-profil">
            <button
              style={{
                backgroundColor: "#FCE4D6",
                border: "none",
                padding: "6px 12px",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#E8640C",
                fontSize: "12px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <img src={pensil} alt="edit" style={{ width: "14px" }} />
              Edit Profile
            </button>
          </Link>
        </div>
        <div style={{ marginTop: "16px" }}>
          <button
            style={{
              width: "100%",
              backgroundColor: "#E8640C",
              color: "white",
              border: "none",
              padding: "14px",
              borderRadius: "10px",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            + Unggah Karya Budaya
          </button>
        </div>
        <div style={{ marginTop: "30px" }}>
          <h3
            style={{ color: "#8B2500", marginBottom: "10px", fontWeight: 700 }}
          >
            Karya Saya
          </h3>

          <div
            style={{
              border: "2px solid #E8640C",
              borderRadius: "12px",
              padding: "80px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <img
              src={gambar}
              alt="kosong"
              style={{
                width: "40px",
                margin: "0 auto 10px",
                display: "block",
              }}
            />

            <p style={{ color: "#888", fontSize: "14px", margin: 0 }}>
              Belum ada karya. Mulai unggah karya budaya Anda!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
