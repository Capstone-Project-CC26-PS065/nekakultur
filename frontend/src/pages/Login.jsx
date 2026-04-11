import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import wayang2 from "../assets/wayang2.png";
import motif from "../assets/motif.png";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [mode, setMode] = useState("menu"); // menu | masuk | daftar
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    email: "",
    password: "",
    konfirmasi: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const API = "http://localhost:5000/api";

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
        mode === "masuk" ? "/users/login" : "/users/register";

      const payload =
        mode === "masuk"
          ? { name: form.email, password: form.password }
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

      // LOGIN
      if (mode === "masuk") {
        localStorage.setItem("token", data.token);
        onLogin();
        navigate("/");
      }

      // REGISTER
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

  // ================= MENU AWAL =================
  if (mode === "menu") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#8B2500",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <h1>NekaKultur</h1>

        <button onClick={() => setMode("masuk")}>Masuk</button>
        <button onClick={() => setMode("daftar")}>Daftar</button>
      </div>
    );
  }

  const isLogin = mode === "masuk";

  // ================= FORM =================
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
      }}
    >
      <div style={{ width: "100%", maxWidth: "860px", marginBottom: "16px" }}>
        <button
          onClick={() => setMode("menu")}
          style={{ background: "none", border: "none", color: "#FF6600" }}
        >
          ← Kembali
        </button>
      </div>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "20px",
          display: "flex",
          width: "100%",
          maxWidth: "860px",
          overflow: "hidden",
        }}
      >
        {/* FORM */}
        <div style={{ flex: 1, padding: "40px" }}>
          <h2>{isLogin ? "Login" : "Register"}</h2>

          {!isLogin && (
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              value={form.nama}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          {!isLogin && (
            <input
              type="password"
              name="konfirmasi"
              placeholder="Konfirmasi Password"
              value={form.konfirmasi}
              onChange={handleChange}
            />
          )}

          <button onClick={handleSubmit} disabled={loading}>
            {loading
              ? "Loading..."
              : isLogin
              ? "Login"
              : "Daftar"}
          </button>

          <p>
            {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}
            <span
              onClick={() =>
                setMode(isLogin ? "daftar" : "masuk")
              }
              style={{ color: "orange", cursor: "pointer" }}
            >
              {isLogin ? " Daftar" : " Login"}
            </span>
          </p>
        </div>

        {/* WAYANG */}
        <div
          style={{
            width: "250px",
            backgroundColor: "#6B3A2A",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <img
            src={wayang2}
            alt="Wayang"
            style={{ height: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
