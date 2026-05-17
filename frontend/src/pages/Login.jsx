import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import wayang from "../assets/wayang.png";
import wayang2 from "../assets/wayang2.png";
import motif from "../assets/motif.png";
import logo from "../assets/logo.png";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [mode, setMode] = useState("menu");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
    konfirmasi: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (!form.email || !form.password) {
        alert("Isi semua field!");
        return;
      }

      // VALIDASI REGISTER
      if (mode === "daftar" && form.password !== form.konfirmasi) {
        alert("Password tidak sama!");
        return;
      }

      setLoading(true);

      const endpoint =
        mode === "masuk" ? "/api/users/login" : "/api/users/register";

      // ✅ FIX PAYLOAD (PENTING)
      const payload =
        mode === "masuk"
          ? {
              email: form.email, // 🔥 FIX DISINI
              password: form.password,
            }
          : {
              name: form.nama,
              email: form.email,
              password: form.password,
            };

      const res = await fetch(API + endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Error ❌");
        return;
      }

      // ✅ LOGIN SUCCESS
      if (mode === "masuk") {
        localStorage.setItem("token", data.token);
        onLogin();
        navigate("/");
      }

      // ✅ REGISTER SUCCESS
      if (mode === "daftar") {
        alert("Register berhasil 🎉");
        setMode("masuk");
      }
    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  // ================= MENU =================

  if (mode === "menu") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#8B2500",
          backgroundImage: `url(${motif})`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          color: "white",
        }}
      >
        <style>{`
          .login-menu-wrap {
            padding: 64px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .login-menu-content {
            max-width: 500px;
            margin-left: 80px;
          }
          .login-menu-title { font-size: 52px; }
          .login-menu-wayang-desktop { width: 220px; object-fit: contain; margin-right: 150px; }
          .login-menu-wayang-mobile { display: none; width: 180px; object-fit: contain; margin: 24px 0; }
          @media (max-width: 768px) {
            .login-menu-wrap {
              flex-direction: column;
              padding: 32px 24px;
              text-align: center;
            }
            .login-menu-content {
              margin-left: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .login-menu-title { font-size: 32px; }
            .login-menu-wayang-desktop { display: none; }
            .login-menu-wayang-mobile { display: block; }
          }
        `}</style>

        <div className="login-menu-wrap">
          <div className="login-menu-content">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "32px",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: "32px", height: "32px", objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "'Prosto One', serif",
                  color: "#FF6600",
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                NekaKultur
              </span>
            </div>
            <h1
              className="login-menu-title"
              style={{ fontWeight: "bold", marginBottom: "16px" }}
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
            <img
              src={wayang}
              alt="Wayang"
              className="login-menu-wayang-mobile"
            />
            <p
              style={{
                fontSize: "16px",
                marginBottom: "48px",
                color: "#f0d0c0",
              }}
            >
              NekaKultur adalah platform edukasi interaktif yang didedikasikan
              untuk melestarikan dan mempromosikan kekayaan budaya Indonesia.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <button
                onClick={() => setMode("masuk")}
                className="card-hover"
                style={{
                  padding: "12px 48px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  backgroundColor: "#E8640C",
                  color: "white",
                  border: "2px solid #E8640C",
                  cursor: "pointer",
                }}
              >
                Masuk
              </button>
              <button
                onClick={() => setMode("daftar")}
                className="card-hover"
                style={{
                  padding: "12px 48px",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  backgroundColor: "white",
                  color: "#8B2500",
                  border: "2px solid white",
                  cursor: "pointer",
                }}
              >
                Daftar
              </button>
            </div>
          </div>
          <img
            src={wayang}
            alt="Wayang"
            className="login-menu-wayang-desktop"
          />
        </div>
      </div>
    );
  }

  // ================= FORM =================
  const isLogin = mode === "masuk";
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#8B2500",
        backgroundImage: `url(${motif})`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
      }}
    >
      <style>{`
        .login-form-box {
          display: flex;
          width: 100%;
          max-width: 860px;
          min-height: 460px;
          background-color: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(0,0,0,0.25);
        }
        .login-wayang-side {
          width: 280px;
          background-color: #6B3A2A;
          border-radius: 0 20px 20px 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .login-wayang-side { display: none; }
        }
      `}</style>

      <div style={{ width: "100%", maxWidth: "860px", marginBottom: "16px" }}>
        <button
          onClick={() => setMode("menu")}
          style={{
            fontFamily: "'Prosto One', serif",
            color: "#FF6600",
            fontSize: "22px",
            fontWeight: "bold",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          NekaKultur
        </button>
      </div>

      <div className="login-form-box">
        <div
          style={{
            flex: 1,
            padding: "48px 44px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#111",
              marginBottom: "6px",
              textAlign: "center",
            }}
          >
            {isLogin
              ? "Satu Langkah untuk Melestarikan Warisan."
              : "Bergabung dan Lestarikan Budaya!"}
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#888",
              marginBottom: "28px",
              textAlign: "center",
            }}
          >
            {isLogin
              ? "Masuk ke NekaKultur untuk mulai menjelajah"
              : "Buat akun baru dan mulai perjalananmu"}
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {!isLogin && (
              <div>
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#444",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan Nama Lengkap"
                  value={form.nama}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                    backgroundColor: "#f9f9f9",
                  }}
                />
              </div>
            )}

            <div>
              <label
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#444",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                value={form.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#444",
                  display: "block",
                  marginBottom: "5px",
                }}
              >
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Masukkan Password"
                  value={form.password}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px 40px 10px 14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                    backgroundColor: "#f9f9f9",
                  }}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    fontSize: "16px",
                    color: "#aaa",
                  }}
                >
                  {showPassword ? "⌣" : "👁"}
                </span>
              </div>
              {isLogin && (
                <p
                  style={{
                    textAlign: "right",
                    fontSize: "12px",
                    color: "#E8640C",
                    marginTop: "4px",
                    cursor: "pointer",
                  }}
                >
                  Lupa Password?
                </p>
              )}
            </div>

            {!isLogin && (
              <div>
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#444",
                    display: "block",
                    marginBottom: "5px",
                  }}
                >
                  Konfirmasi Password
                </label>
                <input
                  type="password"
                  name="konfirmasi"
                  placeholder="Ulangi Password"
                  value={form.konfirmasi}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                    backgroundColor: "#f9f9f9",
                  }}
                />
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                backgroundColor: "#111",
                color: "white",
                fontWeight: "bold",
                padding: "12px",
                borderRadius: "8px",
                border: "none",
                fontSize: "15px",
                cursor: "pointer",
                width: "100%",
                marginTop: "4px",
              }}
            >
              {loading ? "Loading..." : isLogin ? "Sign In" : "Daftar Sekarang"}
            </button>

            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "#888",
                marginTop: "4px",
              }}
            >
              {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
              <span
                onClick={() => setMode(isLogin ? "daftar" : "masuk")}
                style={{
                  color: "#E8640C",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {isLogin ? "Daftar" : "Masuk"}
              </span>
            </p>
          </div>
        </div>

        <div className="login-wayang-side">
          <img
            src={wayang2}
            alt="Wayang"
            style={{ height: "95%", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
