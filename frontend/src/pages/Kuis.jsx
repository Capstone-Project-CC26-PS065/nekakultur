import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const dataKuis = {
  bali: {
    nama: "Bali",
    soal: [
      {
        pertanyaan:
          "Apa nama tarian sakral Bali yang dibawakan oleh puluhan penari pria dengan suara 'cak'?",
        pilihan: ["Tari Pendet", "Tari Kecak", "Tari Barong", "Tari Legong"],
        jawaban: "Tari Kecak",
      },
      {
        pertanyaan:
          "Apa nama senjata tradisional Bali yang memiliki kekuatan spiritual dan bilah berlekuk?",
        pilihan: ["Tombak", "Tameng", "Keris", "Clurit"],
        jawaban: "Keris",
      },
      {
        pertanyaan:
          "Makanan khas Bali yang dibuat dari daging ayam cincang yang dililitkan pada batang serai kemudian dibakar adalah?",
        pilihan: ["Sate Lilit", "Lawar", "Babi Guling", "Nasi Campur"],
        jawaban: "Sate Lilit",
      },
    ],
  },

  papua: {
    nama: "Papua",
    soal: [
      {
        pertanyaan:
          "Apa nama rumah adat khas Papua yang berbentuk bulat dan beratap jerami?",
        pilihan: ["Rumah Gadang", "Rumah Honai", "Rumah Joglo", "Rumah Limas"],
        jawaban: "Rumah Honai",
      },
      {
        pertanyaan:
          "Apa nama alat musik tradisional Papua yang terkenal dan dimainkan dengan cara dipukul?",
        pilihan: ["Angklung", "Tifa", "Gamelan", "Kolintang"],
        jawaban: "Tifa",
      },
      {
        pertanyaan:
          "Makanan khas Papua yang terbuat dari sagu dan biasanya disajikan dengan kuah kuning adalah?",
        pilihan: ["Papeda", "Gudeg", "Rawon", "Rendang"],
        jawaban: "Papeda",
      },
    ],
  },
};

function Kuis({ onSelesaiKuis }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const kuis = dataKuis[id];

  const [soalAktif, setSoalAktif] = useState(0);
  const [dipilih, setDipilih] = useState(null);
  const [sudahSubmit, setSudahSubmit] = useState(false);
  const [skor, setSkor] = useState(0);
  const [selesai, setSelesai] = useState(false);
  const [jawabanUser, setJawabanUser] = useState([]);

  if (!kuis) {
    return (
      <div style={{ padding: "48px 80px" }}>
        <Link to={`/daerah/${id}`}>← Kembali</Link>
        <p>Kuis tidak ditemukan.</p>
      </div>
    );
  }

  const soal = kuis.soal[soalAktif];
  const totalSoal = kuis.soal.length;
  const progress = ((soalAktif + 1) / totalSoal) * 100;

  const handlePilih = (pilihan) => {
    if (sudahSubmit) return;
    setDipilih(pilihan);
  };

  const handleSubmit = () => {
    if (!dipilih) return;
    setSudahSubmit(true);
    const benar = dipilih === soal.jawaban;
    if (benar) setSkor(skor + 1);
    setJawabanUser([...jawabanUser, { dipilih, benar }]);
  };

  const handleLanjut = () => {
    if (soalAktif + 1 >= totalSoal) {
      const skorAkhir = skor + (dipilih === soal.jawaban ? 1 : 0);
      const nilai = Math.round((skorAkhir / totalSoal) * 100);
      if (onSelesaiKuis) onSelesaiKuis(id, nilai);
      setSelesai(true);
    } else {
      setSoalAktif(soalAktif + 1);
      setDipilih(null);
      setSudahSubmit(false);
    }
  };

  const getWarnaPilihan = (pilihan) => {
    if (!sudahSubmit) {
      return dipilih === pilihan
        ? { backgroundColor: "#FFF3E0", border: "2px solid #E8640C" }
        : { backgroundColor: "white", border: "1px solid #ddd" };
    }
    if (pilihan === soal.jawaban) {
      return { backgroundColor: "#E8F5E9", border: "2px solid #4CAF50" };
    }
    if (pilihan === dipilih && dipilih !== soal.jawaban) {
      return { backgroundColor: "#FFEBEE", border: "2px solid #E53935" };
    }
    return { backgroundColor: "white", border: "1px solid #ddd" };
  };

  const getIkon = (pilihan) => {
    if (!sudahSubmit) return null;
    if (pilihan === soal.jawaban)
      return <span style={{ color: "#4CAF50", fontSize: "20px" }}>✔</span>;
    if (pilihan === dipilih && dipilih !== soal.jawaban)
      return <span style={{ color: "#E53935", fontSize: "20px" }}>✖</span>;
    return null;
  };

  if (selesai) {
    const nilai = Math.round((skor / totalSoal) * 100);
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#FFF8F0" }}>
        <div
          style={{
            backgroundColor: "#8B2500",
            padding: "24px 48px",
            color: "white",
          }}
        >
          <Link
            to={`/daerah/${id}`}
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
          <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: 0 }}>
            Kuis: {kuis.nama}
          </h1>
        </div>

        <div
          style={{
            padding: "clamp(16px, 4vw, 48px) clamp(16px, 6vw, 80px)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              padding: "48px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              maxWidth: "500px",
              width: "100%",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "64px", marginBottom: "16px" }}>
              {nilai >= 70 ? "🏆" : "💪"}
            </div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#8B2500",
                marginBottom: "8px",
              }}
            >
              {nilai >= 70 ? "Hebat!" : "Tetap Semangat!"}
            </h2>
            <p
              style={{ color: "#888", fontSize: "15px", marginBottom: "24px" }}
            >
              Kamu menjawab benar {skor} dari {totalSoal} soal
            </p>
            <div
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: nilai >= 70 ? "#4CAF50" : "#E8640C",
                marginBottom: "32px",
              }}
            >
              {nilai}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: window.innerWidth <= 768 ? "column" : "row",
                gap: "12px",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <button
                onClick={() => {
                  setSoalAktif(0);
                  setDipilih(null);
                  setSudahSubmit(false);
                  setSkor(0);
                  setSelesai(false);
                  setJawabanUser([]);
                }}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "2px solid #8B2500",
                  backgroundColor: "white",
                  color: "#8B2500",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Ulangi Kuis
              </button>
              <Link
                to={`/daerah/${id}`}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "#E8640C",
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                }}
              >
                Kembali ke Materi
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFF8F0" }}>
      <div
        style={{
          backgroundColor: "#8B2500",
          padding: "24px 48px",
          color: "white",
        }}
      >
        <Link
          to={`/daerah/${id}`}
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
        <h1 style={{ fontSize: "28px", fontWeight: "bold", margin: "0 0 6px" }}>
          Kuis: {kuis.nama}
        </h1>
        <p style={{ fontSize: "13px", opacity: 0.8, margin: "0 0 12px" }}>
          Pertanyaan: {soalAktif + 1} dari {totalSoal}
        </p>

        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: "999px",
            height: "6px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "6px",
              borderRadius: "999px",
              width: `${progress}%`,
              transition: "width 0.4s ease",
            }}
          />
        </div>
      </div>

      <div
        style={{
          padding: "clamp(16px, 4vw, 48px) clamp(16px, 6vw, 80px)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "24px",
              lineHeight: "1.6",
            }}
          >
            {soal.pertanyaan}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            {soal.pilihan.map((pilihan, i) => (
              <div
                key={i}
                onClick={() => handlePilih(pilihan)}
                style={{
                  padding: "14px 16px",
                  borderRadius: "8px",
                  cursor: sudahSubmit ? "default" : "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "all 0.2s ease",
                  ...getWarnaPilihan(pilihan),
                }}
              >
                <span style={{ fontSize: "14px", color: "#333" }}>
                  {pilihan}
                </span>
                {getIkon(pilihan)}
              </div>
            ))}
          </div>

          {!sudahSubmit ? (
            <button
              onClick={handleSubmit}
              disabled={!dipilih}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                backgroundColor: dipilih ? "#E8640C" : "#ccc",
                color: "white",
                fontWeight: "bold",
                border: "none",
                fontSize: "15px",
                cursor: dipilih ? "pointer" : "not-allowed",
                transition: "background-color 0.2s ease",
              }}
            >
              Submit Jawaban
            </button>
          ) : (
            <button
              onClick={handleLanjut}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                backgroundColor: "#E8640C",
                color: "white",
                fontWeight: "bold",
                border: "none",
                fontSize: "15px",
                cursor: "pointer",
              }}
            >
              {soalAktif + 1 >= totalSoal ? "Lihat Hasil" : "Lanjut →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Kuis;
