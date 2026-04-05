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
          padding: "64px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "500px", marginLeft: "80px" }}>
          <h1
            style={{
              fontSize: "52px",
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
              to="/login"
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
          style={{ width: "220px", objectFit: "contain", marginRight: "150px" }}
        />
      </div>

      <div style={{ padding: "48px 80px" }}>
        <h2 style={{ fontWeight: "bold", color: "#8B2500", fontSize: "19px" }}>
          Jelajahi Daerah
        </h2>
        <p style={{ color: "#888", fontSize: "14px", marginBottom: "16px" }}>
          Pelajari kebudayaan dari berbagai daerah di Indonesia
        </p>
        <div
          className="card-hover"
          style={{
            backgroundColor: "#E8640C",
            borderRadius: "16px",
            padding: "20px",
            color: "white",
            maxWidth: "400px",
          }}
        >
          <img
            src={iconDaerah}
            style={{
              width: "20px",
              height: "20px",
              objectFit: "contain",
              marginBottom: "8px",
              filter: "brightness(0) invert(1)",
            }}
          />
          <h3 style={{ fontWeight: "bold", fontSize: "15px" }}>Lihat Daftar</h3>
          <p style={{ fontSize: "12px", marginTop: "5px", opacity: 0.9 }}>
            Jelajahi semua provinsi dalam tampilan daftar lengkap dengan detail
            kebudayaan
          </p>
          <Link
            to="/daerah"
            className="card-hover"
            style={{
              fontSize: "12px",
              color: "white",
              marginTop: "8px",
              display: "block",
            }}
          >
            Lihat Semua Provinsi →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
