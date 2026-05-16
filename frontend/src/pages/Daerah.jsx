import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";
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

function Daerah({ sudahDibaca = [] }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterPulau, setFilterPulau] = useState("Semua");

  const pulauMap = {
    "Pulau Jawa": ["jakarta", "jogja", "jabar", "jatim"],
    "Pulau Sumatera": ["sumbar", "sumut"],
    "Pulau Kalimantan": ["kaltim"],
    "Pulau Sulawesi": ["sulsel"],
    Papua: ["papua"],
  };

  const filtered = provinsiAktif.filter((p) => {
    const matchSearch = p.nama.toLowerCase().includes(search.toLowerCase());
    const matchPulau =
      filterPulau === "Semua" ||
      (pulauMap[filterPulau] && pulauMap[filterPulau].includes(p.id));
    return matchSearch && matchPulau;
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch(`${API}/learning/materials`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("Gagal ambil data");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFF8F0" }}>
      <div
        style={{
          backgroundColor: "#8B2500",
          padding: "clamp(24px, 5vw, 40px) clamp(16px, 6vw, 80px)",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          Jelajahi Daerah
        </h1>
        <p style={{ fontSize: "16px", color: "#f0d0c0", textAlign: "center" }}>
          Pelajari kebudayaan dari 38 daerah di Indonesia dan uji pengetahuan
          Anda
        </p>
      </div>

      <div style={{ padding: "clamp(20px, 5vw, 32px) clamp(16px, 6vw, 80px)" }}>
        <div
          className="filter-bar"
          style={{ display: "flex", gap: "12px", marginBottom: "24px" }}
        >
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
            <img src={iconDaerah2} style={{ color: "#999", width: "13px" }} />
            <input
              type="text"
              placeholder="Cari daerah"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "13px",
                backgroundColor: "transparent",
              }}
            />
          </div>
          <select
            value={filterPulau}
            onChange={(e) => setFilterPulau(e.target.value)}
            style={{
              padding: "10px 17px",
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
          className="grid-daerah"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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

<style>
  {`
  .grid-daerah {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    .grid-daerah {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .grid-daerah {
      grid-template-columns: 1fr;
    }
  }
`}
</style>;
