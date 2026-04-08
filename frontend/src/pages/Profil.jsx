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
      <div
        style={{
          padding: "clamp(16px, 4vw, 24px)",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            padding: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "flex-start",
            }}
          >
            <img
              src={profil1}
              alt="profil"
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />

            <div style={{ maxWidth: "70%" }}>
              <h3
                style={{
                  margin: 0,
                  color: "#333",
                  fontWeight: 700,
                  fontSize: "15px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {profil.nama}
              </h3>
              <p
                style={{
                  margin: "4px 0",
                  color: "#888",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                @{profil.username}
              </p>
              <p
                style={{
                  marginTop: "8px",
                  fontSize: "12px",
                  color: "#555",
                  lineHeight: "1.4",
                }}
              >
                {profil.bio}
              </p>
            </div>
          </div>

          <Link
            to="/edit-profil"
            style={{
              position: "absolute",
              top: "16px",
              right: "12px",
            }}
          >
            <button
              style={{
                backgroundColor: "#FCE4D6",
                border: "none",
                padding: "6px 10px",
                borderRadius: "8px",
                cursor: "pointer",
                color: "#E8640C",
                fontSize: "8px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <img src={pensil} alt="edit" style={{ width: "10px" }} />
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
              padding: "clamp(24px, 8vw, 80px)",
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
