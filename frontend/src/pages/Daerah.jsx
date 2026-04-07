import { Link } from "react-router-dom";
import { useState } from "react";
import bali from "../assets/bali.png";
import jkt from "../assets/jkt.png";
import jatim from "../assets/jatim.png";
import papua from "../assets/papua.png";
import sumbar from "../assets/sumbar.png";
import jogja from "../assets/jogja.png";
import jabar from "../assets/jabar.png";
import kaltim from "../assets/kaltim.png";
import sulsel from "../assets/sulsel.png";
import sumut from "../assets/sumut.png";
import iconDaerah2 from "../assets/iconDaerah2.png";

const provinsiAktif = [
  {
    id: "bali",
    nama: "Bali",
    foto: bali,
    deskripsi: "Pulau Dewata, pusat budaya Hindu & seni harmonis.",
  },
  {
    id: "papua",
    nama: "Papua",
    foto: papua,
    deskripsi: "Bumi Cenderawasih, tradisi suku yang magis.",
  },
  {
    id: "jakarta",
    nama: "DKI Jakarta",
    foto: jkt,
    deskripsi: "Megapolitan, wadah lebur budaya Betawi & Nusantara",
  },
  {
    id: "jogja",
    nama: "DI Yogyakarta",
    foto: jogja,
    deskripsi: "Kota budaya, penjaga tradisi monarki Jawa klasik.",
  },
  {
    id: "jabar",
    nama: "Jawa Barat",
    foto: jabar,
    deskripsi: "Tanah Pasundan, pusat budaya Sunda yang anggun.",
  },
  {
    id: "jatim",
    nama: "Jawa Timur",
    foto: jatim,
    deskripsi: "Mataraman, perpaduan budaya Jawa & Madura yang berani.",
  },
  {
    id: "sumbar",
    nama: "Sumatera Barat",
    foto: sumbar,
    deskripsi:
      "Negeri Minangkabau dengan sistem matrilineal dan falsafah adat yang kokoh.",
  },
  {
    id: "sumut",
    nama: "Sumatera Utara",
    foto: sumut,
    deskripsi:
      "Tanah Batak yang dinamis, perpaduan budaya suku Batak, Melayu, dan Tionghoa.",
  },
  {
    id: "kaltim",
    nama: "Kalimantan Timur",
    foto: kaltim,
    deskripsi: "Tanah Kutai, pusat kerajaan tertua & kaya alam.",
  },
  {
    id: "sulsel",
    nama: "Sulawesi Selatan",
    foto: sulsel,
    deskripsi: "Bumi Arung Palakka, pusat budaya Bugis-Makassar.",
  },
];

const provinsiSegera = [
  "Aceh",
  "Riau",
  "Kepulauan Riau",
  "Jambi",
  "Bengkulu",
  "Sumatera Selatan",
  "Kepulauan Bangka Belitung",
  "Lampung",
  "Banten",
  "Jawa Tengah",
  "Nusa Tenggara Barat",
  "Nusa Tenggara Timur",
  "Kalimantan Barat",
  "Kalimantan Tengah",
  "Kalimantan Selatan",
  "Kalimantan Utara",
  "Sulawesi Tengah",
  "Sulawesi Tenggara",
  "Sulawesi Barat",
  "Sulawesi Utara",
  "Gorontalo",
  "Maluku",
  "Maluku Utara",
  "Papua Barat",
  "Papua Selatan",
  "Papua Tengah",
  "Papua Pegunungan",
  "Papua Barat Daya",
];

function Daerah({ sudahDibaca = [], sedangDipelajari = [], nilaiKuis = {} }) {
  const [search, setSearch] = useState("");
  const [filterPulau, setFilterPulau] = useState("Semua");

  const pulauMap = {
    "Pulau Jawa": ["jakarta", "jogja", "jabar", "jatim"],
    "Pulau Sumatera": ["sumbar", "sumut"],
    "Pulau Kalimantan": ["kaltim"],
    "Pulau Sulawesi": ["sulsel"],
    Papua: ["papua"],
  };

  const nilaiArr = Object.values(nilaiKuis);
  const rataRata =
    nilaiArr.length > 0
      ? Math.round(nilaiArr.reduce((a, b) => a + b, 0) / nilaiArr.length)
      : 0;

  const filtered = provinsiAktif.filter((p) => {
    const matchSearch = p.nama.toLowerCase().includes(search.toLowerCase());
    const matchPulau =
      filterPulau === "Semua" ||
      (pulauMap[filterPulau] && pulauMap[filterPulau].includes(p.id));
    return matchSearch && matchPulau;
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFF8F0" }}>
      <div
        style={{
          backgroundColor: "#8B2500",
          padding: "40px 80px",
          color: "white",
        }}
      >
        <h1
          style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "8px" }}
        >
          Jelajahi Daerah
        </h1>
        <p style={{ fontSize: "16px", color: "#f0d0c0" }}>
          Pelajari kebudayaan dari 38 daerah di Indonesia dan uji pengetahuan
          Anda
        </p>
      </div>

      <div style={{ padding: "32px 80px" }}>
        <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: "10px",
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "10px 16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            <img src={iconDaerah2} style={{ color: "#999" }} />
            <input
              type="text"
              placeholder="Cari daerah atau provinsi"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "14px",
                backgroundColor: "transparent",
              }}
            />
          </div>
          <select
            value={filterPulau}
            onChange={(e) => setFilterPulau(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "14px",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            <option>Semua</option>
            <option>Pulau Jawa</option>
            <option>Pulau Sumatera</option>
            <option>Pulau Kalimantan</option>
            <option>Pulau Sulawesi</option>
            <option>Papua</option>
          </select>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          {[
            { label: "Daerah Selesai", value: sudahDibaca.length },
            { label: "Sedang Dipelajari", value: sedangDipelajari.length },
            { label: "Rata-rata Kuis", value: `${rataRata}%` },
          ].map((stat, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#E8640C",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{ fontSize: "14px", color: "#888", marginTop: "4px" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {filtered.map((provinsi) => (
            <div
              key={provinsi.id}
              className="card-hover"
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                position: "relative",
              }}
            >
              {sudahDibaca.includes(provinsi.id) && (
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontSize: "11px",
                    fontWeight: "bold",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    zIndex: 1,
                  }}
                >
                  ✓ Sudah Dibaca
                </div>
              )}
              <img
                src={provinsi.foto}
                alt={provinsi.nama}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />
              <div style={{ padding: "16px" }}>
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginBottom: "6px",
                    color: "#8B2500",
                  }}
                >
                  {provinsi.nama}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#666",
                    marginBottom: "12px",
                    lineHeight: "1.5",
                  }}
                >
                  {provinsi.deskripsi}
                </p>
                <Link
                  to={`/daerah/${provinsi.id}`}
                  className="card-hover"
                  style={{
                    display: "block",
                    backgroundColor: "#E8640C",
                    color: "white",
                    fontWeight: "bold",
                    padding: "10px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                >
                  Mulai Belajar
                </Link>
              </div>
            </div>
          ))}

          {provinsiSegera.map((nama, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                opacity: 0.6,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  backgroundColor: "#e0d5cc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#8B2500",
                    color: "white",
                    padding: "6px 16px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    fontWeight: "bold",
                  }}
                >
                  Segera Hadir
                </span>
              </div>
              <div style={{ padding: "16px" }}>
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#999",
                  }}
                >
                  {nama}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#bbb",
                    marginBottom: "12px",
                  }}
                >
                  Konten sedang disiapkan
                </p>
                <div
                  style={{
                    backgroundColor: "#ddd",
                    color: "#999",
                    fontWeight: "bold",
                    padding: "10px",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                >
                  Segera Hadir
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Daerah;
