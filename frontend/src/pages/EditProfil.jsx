import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import profilDefault from "../assets/profil1.jpg";

function EditProfil() {
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("profil");
    return saved
      ? JSON.parse(saved)
      : {
          nama: "Pecinta Budaya",
          username: "pecintabudaya",
          bio: "Melestarikan budaya Indonesia",
          foto: "",
        };
  });

  const fileInputRef = useRef();

  useEffect(() => {
    const saved = localStorage.getItem("profil");
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setForm((prev) => ({
          ...prev,
          foto: reader.result,
        }));
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("profil", JSON.stringify(form));
    alert("Profil berhasil disimpan!");
  };

  return (
    <div style={{ backgroundColor: "#F5EBDD", minHeight: "100vh" }}>
      <div style={{ padding: "clamp(16px, 6vw, 80px)" }}>
        <Link
          to="/profil"
          className="card-hover"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "14px",
            backgroundColor: "rgba(0,0,0,0.2)",
            padding: "6px 14px",
            borderRadius: "999px",
            display: "inline-block",
            marginBottom: "12px",
          }}
        >
          ← Kembali
        </Link>

        <h2 style={{ color: "#8B2500", marginTop: "16px", fontWeight: "bold" }}>
          Edit Profil
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={form.foto || profilDefault}
            alt="profil"
            onError={(e) => {
              e.target.src = profilDefault;
            }}
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFotoChange}
            style={{ display: "none" }}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            style={{
              backgroundColor: "#FCE4D6",
              border: "none",
              padding: "6px 12px",
              borderRadius: "8px",
              color: "#E8640C",
              cursor: "pointer",
              fontSize: "13px",
            }}
          >
            Ganti Foto
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            placeholder="Nama"
            style={inputStyle}
          />

          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            style={inputStyle}
          />

          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Bio"
            rows={3}
            style={inputStyle}
          />

          <button style={btnStyle}>Simpan</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "14px",
};

const btnStyle = {
  backgroundColor: "#E8640C",
  color: "white",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default EditProfil;
