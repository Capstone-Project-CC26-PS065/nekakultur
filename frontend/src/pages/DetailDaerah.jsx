import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import balitr1 from "../assets/balitr1.jpg";
import balitr2 from "../assets/balitr2.jpg";
import balitr3 from "../assets/balitr3.jpg";
import balitr4 from "../assets/balitr4.jpg";
import kecak from "../assets/kecak.jpg";
import pabali from "../assets/pa-bali.jpg";
import ambali from "../assets/am-bali.jpg";
import sabali from "../assets/sa-bali.jpg";
import mkbali from "../assets/mk-bali.jpg";
import lensa from "../assets/lensa.png";

const dataProvinsi = {
  bali: {
    nama: "Bali",
    deskripsi:
      "Pusat budaya Hindu & seni harmonis. Bali dikenal dengan tradisi seni yang kaya, upacara keagamaan yang megah, dan keindahan alam yang memukau.",
    video:
      "https://www.youtube.com/embed/_Ey3osjBd3o?si=TEBcXO0L4qNR3c67&start=0",
    slideshow: [
      { foto: balitr1, caption: "Rumah Gapura Candi Bentar" },
      { foto: balitr2, caption: "Pura Taman Ayun" },
      { foto: balitr3, caption: "Istana Ubud" },
      { foto: balitr4, caption: "Gapura Bali" },
    ],
    galeri: [
      { foto: kecak, caption: "Tarian Tradisional Bali", kategori: "tarian" },
      {
        foto: pabali,
        caption: "Pakaian Tradisional Bali",
        kategori: "pakaian",
      },
      {
        foto: ambali,
        caption: "Alat Musik Tradisional Bali",
        kategori: "musik",
      },
      {
        foto: sabali,
        caption: "Senjata Tradisional Bali",
        kategori: "senjata",
      },
      {
        foto: mkbali,
        caption: "Makanan Khas Tradisional Bali",
        kategori: "makanan",
      },
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

      <div style={{ padding: "0 80px 32px" }}>
        <h2
          style={{
            fontWeight: "bold",
            color: "#8B2500",
            fontSize: "20px",
            marginBottom: "16px",
          }}
        >
          Video Budaya {provinsi.nama}
        </h2>
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
          }}
        >
          <iframe
            width="100%"
            height="450"
            src={provinsi.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div style={{ padding: "0 80px 48px" }}>
        <h2
          style={{
            fontWeight: "bold",
            color: "#8B2500",
            fontSize: "20px",
            marginBottom: "8px",
          }}
        >
          Pelajari Lebih Lanjut tentang {provinsi.nama}
        </h2>
        <p style={{ color: "#888", fontSize: "14px", marginBottom: "16px" }}>
          Eksplorasi budaya, tradisi, dan keunikan daerah ini
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {provinsi.galeri.slice(0, 3).map((item, i) => (
            <Link
              to={`/kategori/${id}/${item.kategori}`}
              key={i}
              style={{ textDecoration: "none" }}
            >
              <div
                className="card-hover"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.foto}
                  alt={item.caption}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(0,0,0,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    src={lensa}
                    alt="lensa"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                  <p
                    style={{
                      color: "white",
                      fontSize: "13px",
                      fontWeight: "500",
                      margin: 0,
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "16px",
            marginTop: "16px",
            width: "66.6%",
            margin: "16px auto 0",
          }}
        >
          {provinsi.galeri.slice(3).map((item, i) => (
            <Link
              to={`/kategori/${id}/${item.kategori}`}
              key={i}
              style={{ textDecoration: "none" }}
            >
              <div
                className="card-hover"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.foto}
                  alt={item.caption}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(0,0,0,0.3)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  <img
                    src={lensa}
                    alt="lensa"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                  <p
                    style={{
                      color: "white",
                      fontSize: "13px",
                      fontWeight: "500",
                      margin: 0,
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailDaerah;
