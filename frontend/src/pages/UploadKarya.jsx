import { useState } from "react";
import { Link } from "react-router-dom";

function UploadKarya() {
  const [form, setForm] = useState({
    judul: "",
    deskripsi: "",
    gambar: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "gambar") {
      const file = files[0];

      if (file && !file.type.startsWith("image/")) {
        alert("File harus berupa gambar!");
        return;
      }

      setForm({ ...form, gambar: file });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.judul || !form.deskripsi || !form.gambar) {
      alert("Lengkapi semua data!");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      const existing = JSON.parse(localStorage.getItem("karya")) || [];

      const newKarya = {
        id: Date.now(),
        judul: form.judul,
        deskripsi: form.deskripsi,
        gambar: reader.result,
      };

      localStorage.setItem("karya", JSON.stringify([newKarya, ...existing]));

      setForm({
        judul: "",
        deskripsi: "",
        gambar: null,
      });

      alert("Karya berhasil diunggah!");
      window.location.href = "/profil";
    };

    reader.readAsDataURL(form.gambar);
  };

  const preview = form.gambar ? URL.createObjectURL(form.gambar) : null;

  return (
    <div style={{ backgroundColor: "#F5EBDD", minHeight: "100vh" }}>
      <div style={{ padding: "clamp(16px, 6vw, 80px)" }}>
        <Link to="/profil">← Kembali</Link>

        <h2 style={{ color: "#8B2500", marginTop: "16px", fontWeight: "bold" }}>
          Unggah Karya Budaya
        </h2>

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
            name="judul"
            placeholder="Judul Karya"
            value={form.judul}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="deskripsi"
            placeholder="Deskripsi"
            value={form.deskripsi}
            onChange={handleChange}
            rows={4}
            style={inputStyle}
          />

          <div
            style={{
              border: "2px dashed #E8640C",
              borderRadius: "12px",
              padding: "24px",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: "#FFF7F2",
            }}
            onClick={() => document.getElementById("fileInput").click()}
          >
            {preview ? (
              <img
                src={preview}
                alt="preview"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            ) : (
              <p style={{ margin: 0, color: "#E8640C" }}>
                + Klik untuk pilih file
              </p>
            )}

            {form.gambar && (
              <p style={{ fontSize: "12px", marginTop: "8px" }}>
                {form.gambar.name}
              </p>
            )}

            <input
              id="fileInput"
              type="file"
              name="gambar"
              accept="image/*"
              onChange={handleChange}
              style={{ display: "none" }}
            />
          </div>

          <button style={btnStyle}>Upload</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
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

export default UploadKarya;
