import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import wayang from "../assets/wayang.png";
import motif from "../assets/motif.png";
import logo2 from "../assets/logo2.jpeg";

function Login() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const API = "http://localhost:5000/api";

  const handleLogin = async () => {
    try {
      const res = await fetch(`${API}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login berhasil 🚀");
        navigate("/dashboard");
      } else {
        alert("Login gagal ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi error");
    }
  };

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
        {/* LOGO */}
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
          <img src={logo2} alt="logo" style={{ width: "30px" }} />
          NekaKultur
        </Link>

        <div className="content" style={{ display: "flex", gap: "24px" }}>
          {/* LEFT */}
          <div className="text">
            <h1>
              Selamat datang di <br />
              <span style={{ color: "#E8640C" }}>NekaKultur</span>
            </h1>

            <p>
              Platform edukasi interaktif untuk budaya Indonesia.
            </p>

            {/* FORM LOGIN */}
            <div style={{ marginTop: "20px" }}>
              <input
                type="text"
                placeholder="Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
              />

              <button
                onClick={handleLogin}
                style={{
                  padding: "10px",
                  background: "#E8640C",
                  color: "white",
                  border: "none",
                  width: "100%",
                }}
              >
                Login
              </button>
            </div>

            <p style={{ marginTop: "10px" }}>
              Belum punya akun?{" "}
              <Link to="/login/daftar" style={{ color: "#FFB347" }}>
                Daftar
              </Link>
            </p>
          </div>

          {/* IMAGE */}
          <img src={wayang} alt="Wayang" style={{ width: "300px" }} />
        </div>
      </div>
    </div>
  );
}

export default Login;
