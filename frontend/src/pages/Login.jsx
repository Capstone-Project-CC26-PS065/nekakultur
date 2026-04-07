import { Link } from "react-router-dom";
import wayang from "../assets/wayang.png";
import motif from "../assets/motif.png";

function Login() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#8B2500" }}>
      <div
        style={{
          backgroundColor: "#8B2500",
          backgroundImage: `url(${motif})`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          color: "white",
          padding: "clamp(32px, 5vw, 64px) clamp(20px, 5vw, 80px)",
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minHeight: "100vh",
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
            style={{ fontSize: "16px", marginBottom: "48px", color: "#f0d0c0" }}
          >
            NekaKultur adalah platform edukasi interaktif yang didedikasikan
            untuk melestarikan dan mempromosikan kekayaan budaya Indonesia.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <Link
              to="/login/masuk"
              className="card-hover"
              style={{
                padding: "12px 48px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "20px",
                backgroundColor: "#E8640C",
                color: "white",
                border: "2px solid #E8640C",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Masuk
            </Link>
            <Link
              to="/login/daftar"
              className="card-hover"
              style={{
                padding: "12px 48px",
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "20px",
                backgroundColor: "white",
                color: "#8B2500",
                border: "2px solid white",
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              Daftar
            </Link>
          </div>
        </div>

        <img
          src={wayang}
          alt="Wayang"
          style={{ width: "220px", objectFit: "contain", marginRight: "150px" }}
        />
      </div>
    </div>
  );
}

export default Login;
