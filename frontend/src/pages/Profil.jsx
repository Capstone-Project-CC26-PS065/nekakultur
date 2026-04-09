import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profil1 from "../assets/profil1.jpg";
import pensil from "../assets/pensil.png";
import gambar from "../assets/gambar.png";

function Profil() {
  const [profil, setProfil] = useState({
    nama: "Pecinta Budaya",
    username: "pecintabudaya",
    bio: "Melestarikan budaya Indonesia",
    foto: "",
  });

  const [karya, setKarya] = useState([]);

  useEffect(() => {
    const savedProfil = localStorage.getItem("profil");
    if (savedProfil) {
      setProfil(JSON.parse(savedProfil));
    }

    const savedKarya = JSON.parse(localStorage.getItem("karya")) || [];
    setKarya(savedKarya);
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Yakin mau hapus karya ini?");
    if (!confirmDelete) return;

    const updated = karya.filter((item) => item.id !== id);
    setKarya(updated);
    localStorage.setItem("karya", JSON.stringify(updated));
  };

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
              src={profil.foto || profil1}
              alt="profil"
              onError={(e) => {
                e.target.src = profil1;
              }}
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                objectFit: "cover",
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
          <Link to="/upload">
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
          </Link>
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
            {karya.length === 0 ? (
              <>
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
              </>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "16px",
                }}
              >
                {karya.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      position: "relative",
                      borderRadius: "12px",
                      overflow: "hidden",
                      backgroundColor: "#fff",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 1", // 🔥 ini bikin kotak kayak IG
                        objectFit: "cover",
                      }}
                    />
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        color: "#fff",
                        border: "none",
                        borderRadius: "50%",
                        width: "24px",
                        height: "24px",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      ×
                    </button>

                    <div style={{ padding: "10px" }}>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          margin: 0,
                          color: "#333",
                        }}
                      >
                        {item.judul}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
