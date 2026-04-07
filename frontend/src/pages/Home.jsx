import { Link } from "react-router-dom";
import wayang from "../assets/wayang.png";
import motif from "../assets/motif.png";
import iconDaerah from "../assets/iconDaerah.png";

function Home() {
  return (
    <div style={{ minHeight: "100%", backgroundColor: "#FFF8F0" }}>
      <div
        style={{
          backgroundColor: "#8B2500",
          backgroundImage: `url(${motif})`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          color: "white",
          padding: "clamp(32px, 5vw, 64px) clamp(20px, 5vw, 48px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "500px", marginLeft: "clamp(0px, 5vw, 80px)" }}>
          <h1
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Selamat datang di <br />
            <span
              style={{
                fontFamily: "'Prosto One', serif",
                color: "#E8640C",
                WebkitTextStroke: "0.1px #FFB347",
              }}
            >
              NekaKultur
            </span>
          </h1>
          <p
            style={{ fontSize: "16px", marginBottom: "32px", color: "#f0d0c0" }}
          >
            NekaKultur adalah platform edukasi interaktif yang didedikasikan
            untuk melestarikan dan mempromosikan kekayaan budaya Indonesia.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link
              to="/daerah"
              className="card-hover"
              style={{
                backgroundColor: "#E8640C",
                color: "white",
                fontWeight: "bold",
                padding: "11px 24px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Mulai Belajar
            </Link>
            <Link
              to="/profil"
              className="card-hover"
              style={{
                backgroundColor: "white",
                color: "#8B2500",
                fontWeight: "bold",
                padding: "11px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                border: "2px solid white",
              }}
            >
              Lihat Profil
            </Link>
          </div>
        </div>
        <img
          src={wayang}
          alt="Wayang"
          style={{
            width: "clamp(120px, 15vw, 220px)",
            objectFit: "contain",
            marginRight: "clamp(0px, 10vw, 150px)",
          }}
        />
      </div>
    </div>
  );
}

export default Home;
