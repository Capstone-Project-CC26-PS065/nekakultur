import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import balitr1 from "../assets/balitr1.jpg";
import balitr2 from "../assets/balitr2.jpg";
import balitr3 from "../assets/balitr3.jpg";
import balitr4 from "../assets/balitr4.jpg";

const dataProvinsi = {
  bali: {
    nama: "Bali",
    deskripsi:
      "Pulau Dewata, pusat budaya Hindu & seni harmonis. Bali dikenal dengan tradisi seni yang kaya, upacara keagamaan yang megah, dan keindahan alam yang memukau.",
    slideshow: [
      { foto: balitr1, caption: "Rumah Gapura Candi Bentar" },
      { foto: balitr2, caption: "Pura Taman Ayun" },
      { foto: balitr3, caption: "Istana Ubud" },
      { foto: balitr4, caption: "Gapura Bali" },
    ],
  },
};

function DetailDaerah() {
  const { id } = useParams();
  const provinsi = dataProvinsi[id];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!provinsi) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) =>
        prev === provinsi.slideshow.length - 1 ? 0 : prev + 1,
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [provinsi]);

  if (!provinsi) {
    return (
      <div style={{ padding: "48px 80px" }}>
        <Link to="/daerah">← Kembali</Link>
        <p>Provinsi tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFF8F0" }}>
      <div style={{ padding: "32px 80px" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "450px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          }}
        >
          {provinsi.slideshow.map((item, i) => (
            <img
              key={i}
              src={item.foto}
              alt={`slide-${i}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: i === activeSlide ? 1 : 0,
                transition: "opacity 1s ease",
              }}
            />
          ))}

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.3) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(139, 37, 0, 0.75)",
              padding: "8px 20px",
              zIndex: 2,
            }}
          >
            <p
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "13px",
                fontWeight: "500",
                margin: 0,
              }}
            >
              {provinsi.slideshow[activeSlide].caption}
            </p>
          </div>

          <Link
            to="/daerah"
            style={{
              position: "absolute",
              top: "20px",
              left: "24px",
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "bold",
              zIndex: 2,
              backgroundColor: "rgba(0,0,0,0.3)",
              padding: "6px 14px",
              borderRadius: "999px",
            }}
          >
            ← Kembali
          </Link>

          <h1
            style={{
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              fontSize: "36px",
              fontWeight: "bold",
              zIndex: 2,
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              whiteSpace: "nowrap",
            }}
          >
            {provinsi.nama}
          </h1>

          <div
            style={{
              position: "absolute",
              bottom: "48px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              zIndex: 2,
            }}
          >
            {provinsi.slideshow.map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveSlide(i)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                    i === activeSlide ? "white" : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "0 80px 32px" }}>
        <p
          style={{
            fontSize: "16px",
            color: "#555",
            lineHeight: "1.8",
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {provinsi.deskripsi}
        </p>
      </div>
    </div>
  );
}

export default DetailDaerah;
