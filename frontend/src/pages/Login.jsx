import { Link } from "react-router-dom";
import wayang from "../assets/wayang.png";
import motif from "../assets/motif.png";
import logo2 from "../assets/logo2.jpeg";

function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#8B2500",
        backgroundImage: `url(${motif})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(24px, 5vw, 64px)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Link
          to="/"
          style={{
            fontFamily: "'Prosto One', serif",
            color: "#FF6600",
            fontSize: "clamp(18px, 3vw, 24px)",
            fontWeight: "bold",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            src={logo2}
            alt="logo"
            style={{ width: "30px", height: "30px", objectFit: "contain" }}
          />
          NekaKultur
        </Link>

        <div
          className="content"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div
            className="text"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(26px, 5vw, 52px)",
                fontWeight: "bold",
                lineHeight: "1.3",
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
              style={{
                fontSize: "clamp(13px, 1.5vw, 16px)",
                color: "#f0d0c0",
                lineHeight: "1.7",
                maxWidth: "500px",
              }}
            >
              NekaKultur adalah platform edukasi interaktif yang didedikasikan
              untuk melestarikan dan mempromosikan kekayaan budaya Indonesia.
            </p>

            <div
              className="buttons"
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                to="/login/masuk"
                className="card-hover"
                style={{
                  padding: "12px 32px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  backgroundColor: "#E8640C",
                  color: "white",
                  border: "2px solid #E8640C",
                  textDecoration: "none",
                }}
              >
                Masuk
              </Link>
              <Link
                to="/login/daftar"
                className="card-hover"
                style={{
                  padding: "12px 32px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  backgroundColor: "white",
                  color: "#8B2500",
                  border: "2px solid white",
                  textDecoration: "none",
                }}
              >
                Daftar
              </Link>
            </div>

            <img
              src={wayang}
              alt="Wayang"
              className="wayang-mobile"
              style={{
                width: "clamp(160px, 50vw, 220px)",
                display: "block",
              }}
            />
          </div>

          <img
            src={wayang}
            alt="Wayang"
            className="wayang"
            style={{
              width: "320px",
              marginRight: "100px",
              marginBottom: "40px",
            }}
          />
        </div>
      </div>

      <style>
        {`
    .wayang-mobile { display: block; }
    .wayang { display: none; }
   
         

    @media (min-width: 768px) {
     

      .content {
        flex-direction: row !important;
        justify-content: space-between;
        align-items: center;
      }
    

      .text {
        align-items: flex-start !important;
        text-align: left !important;
        max-width: 520px;
      }

      .wayang-mobile { display: none !important; }
      .wayang { display: block !important; }

      .buttons {
        justify-content: flex-start !important;
      }

     

      
    }
  `}
      </style>
    </div>
  );
}

export default Login;
