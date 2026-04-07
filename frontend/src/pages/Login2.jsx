import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import wayang2 from "../assets/wayang2.png";
import motif from "../assets/motif.png";

function Login2({ onLogin }) {
  const { mode } = useParams();
  const isLogin = mode === "masuk";

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

  const handleSubmit = () => {
    if (!isLogin && form.password !== form.konfirmasi) {
      alert("Password dan konfirmasi password tidak sama!");
      return;
    }
    onLogin();
  };

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
        padding: "clamp(16px, 4vw, 40px)",
      }}
    >
      <div style={{ width: "100%", maxWidth: "860px", marginBottom: "16px" }}>
        <Link
          to="/login"
          style={{
            fontFamily: "'Prosto One', serif",
            color: "#FF6600",
            fontSize: "22px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          NekaKultur
        </Link>
      </div>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          display: "flex",
          flexWrap: "wrap",
          overflow: "hidden",
          width: "100%",
          maxWidth: "860px",
          minHeight: "460px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.25)",
        }}
      >
        {/* Form */}
        <div
          style={{
            flex: 1,
            minWidth: "280px",
            padding: "clamp(24px, 4vw, 48px) clamp(20px, 4vw, 44px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(18px, 2.5vw, 22px)",
              fontWeight: "bold",
              color: "#111",
              marginBottom: "6px",
              textAlign: "center",
              whiteSpace: "pre-line",
            }}
          >
            {isLogin
              ? "Satu Langkah untuk\nMelestarikan Warisan."
              : "Bergabung dan\nLestarikan Budaya!"}
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
                  {showPassword ? "🙈" : "👁"}
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
              {isLogin ? "Sign In" : "Daftar Sekarang"}
            </button>

            <button
              style={{
                backgroundColor: "white",
                color: "#333",
                fontWeight: "600",
                padding: "11px",
                borderRadius: "8px",
                border: "1px solid #ddd",
                fontSize: "14px",
                cursor: "pointer",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  color: "#4251f4",
                  fontSize: "16px",
                }}
              >
                G
              </span>
              Sign In With Google
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
              <Link
                to={isLogin ? "/login/daftar" : "/login/masuk"}
                style={{
                  color: "#E8640C",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                {isLogin ? "Daftar" : "Masuk"}
              </Link>
            </p>
          </div>
        </div>

        {/* Wayang - disembunyikan di mobile */}
        <div
          style={{
            width: "clamp(0px, 30vw, 280px)",
            backgroundColor: "#6B3A2A",
            borderRadius: "0 20px 20px 0",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
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

export default Login2;
