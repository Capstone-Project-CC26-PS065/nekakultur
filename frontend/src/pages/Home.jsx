import { Link } from "react-router-dom";
import wayang from "../assets/wayang.png";
import motif from "../assets/motif.png";

function Home() {
  return (
    <div style={{ minHeight: "100%", backgroundColor: "#FFF8F0" }}>
      <div
        className="hero"
        style={{
          backgroundColor: "#8B2500",
          backgroundImage: `url(${motif})`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          color: "white",
          padding: "clamp(32px, 5vw, 64px) clamp(20px, 5vw, 48px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
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
        </div>

        <img
          src={wayang}
          alt="Wayang"
          className="wayang"
          style={{
            width: "clamp(140px, 40vw, 220px)",
            margin: "10px auto",
          }}
        />

        <p
          style={{
            fontSize: "16px",
            color: "#f0d0c0",
            maxWidth: "500px",
          }}
        >
          NekaKultur adalah platform edukasi interaktif yang didedikasikan untuk
          melestarikan dan mempromosikan kekayaan budaya Indonesia.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
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

      <style>
        {`
          @media (min-width: 768px) {
            .hero {
              flex-direction: row;
              justify-content: space-between;
              text-align: left;
            }

            .hero img {
              margin: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
