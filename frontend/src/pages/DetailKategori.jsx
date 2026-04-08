import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import taribali1 from "../assets/taribali1.jpg";
import taribali2 from "../assets/taribali2.jpg";
import taribali3 from "../assets/taribali3.jpg";
import bajubali1 from "../assets/bajubali1.jpg";
import bajubali2 from "../assets/bajubali2.jpg";
import musikbali1 from "../assets/musikbali1.jpg";
import musikbali2 from "../assets/musikbali2.jpg";
import musikbali3 from "../assets/musikbali3.jpg";
import musikbali4 from "../assets/musikbali4.jpg";
import sbali1 from "../assets/sbali1.png";
import sbali2 from "../assets/sbali2.jpg";
import sbali3 from "../assets/sbali3.jpg";
import makanbali1 from "../assets/makanbali1.jpg";
import makanbali2 from "../assets/makanbali2.jpg";
import makanbali3 from "../assets/makanbali3.jpg";
import makanbali4 from "../assets/makanbali4.jpg";

const dataKategori = {
  bali: {
    tarian: {
      judul: "Tarian Tradisional",
      provinsi: "Bali",
      slides: [
        {
          foto: taribali1,
          nama: "Tari Pendet",
          deskripsi:
            "Tari Pendet adalah tarian penyambutan dari Bali yang melambangkan penerimaan tamu dengan tulus dan penuh hormat. Tarian ini biasanya dibawakan oleh wanita dengan membawa sangku, kendi, cawan, dan perlengkapan sesajen lainnya.",
          ciri: [
            "Dibawakan oleh wanita",
            "Menggunakan properti bokor berisi bunga",
            "Gerakan mata yang khas disebut seledet",
            "Biasanya dibawakan 4-5 penari",
          ],
        },
        {
          foto: taribali2,
          nama: "Tari Kecak",
          deskripsi:
            "Tari Kecak adalah tarian kolosal khas Bali yang menggambarkan kisah Ramayana. Tarian ini unik karena tidak menggunakan alat musik, melainkan suara 'cak' dari puluhan penari pria yang duduk melingkar.",
          ciri: [
            "Dibawakan oleh puluhan penari pria",
            "Tidak menggunakan gamelan",
            "Iringan hanya suara 'cak' penari",
            "Menggambarkan kisah Ramayana",
          ],
        },
        {
          foto: taribali3,
          nama: "Tari Barong",
          deskripsi:
            "Tari Barong menggambarkan pertarungan abadi antara kebaikan yang diwakili Barong dan kejahatan yang diwakili Rangda. Barong adalah makhluk mitologi Bali berwujud singa yang melambangkan kebaikan.",
          ciri: [
            "Dimainkan oleh dua penari dalam kostum Barong",
            "Melambangkan pertarungan baik dan jahat",
            "Biasanya dipentaskan di pura",
            "Diiringi gamelan Bali",
          ],
        },
      ],
    },

    pakaian: {
      judul: "Pakaian Tradisional",
      provinsi: "Bali",
      slides: [
        {
          foto: bajubali1,
          nama: "Payas Agung",
          deskripsi:
            "Payas Agung merupakan pakaian adat Bali yang paling mewah dan sakral. Biasanya digunakan dalam upacara besar seperti pernikahan dan ritual keagamaan penting.",
          ciri: [
            "Menggunakan mahkota (gelungan) besar dan megah",
            "Perhiasan emas yang lengkap",
            "Kain dengan motif khas Bali yang mewah",
            "Digunakan pada acara sakral dan resmi",
          ],
        },
        {
          foto: bajubali2,
          nama: "Payas Madya & Payas Alit",
          deskripsi:
            "Payas Madya dan Payas Alit adalah pakaian adat Bali yang lebih sederhana dibandingkan Payas Agung. Payas Madya digunakan untuk acara semi formal, sedangkan Payas Alit digunakan dalam kegiatan sehari-hari atau sembahyang.",
          ciri: [
            "Payas Madya lebih sederhana dari Agung namun tetap formal",
            "Payas Alit digunakan untuk aktivitas sehari-hari",
            "Perhiasan tidak sebanyak Payas Agung",
            "Lebih nyaman dan praktis digunakan",
          ],
        },
      ],
    },

    musik: {
      judul: "Alat Musik Tradisional",
      provinsi: "Bali",
      slides: [
        {
          foto: musikbali1,
          nama: "Rindik",
          deskripsi:
            "Rindik adalah alat musik tradisional Bali yang terbuat dari bambu dan dimainkan dengan cara dipukul. Suaranya lembut dan biasanya digunakan untuk mengiringi tarian atau acara santai.",
          ciri: [
            "Terbuat dari bambu",
            "Dimainkan dengan dipukul",
            "Menghasilkan nada lembut",
            "Sering digunakan untuk hiburan dan penyambutan tamu",
          ],
        },
        {
          foto: musikbali2,
          nama: "Gender",
          deskripsi:
            "Gender adalah alat musik berbentuk bilah logam yang dimainkan dengan dua pemukul. Biasanya digunakan dalam upacara adat dan pertunjukan gamelan Bali.",
          ciri: [
            "Memiliki bilah logam",
            "Dimainkan dengan dua tabuh",
            "Suara khas bergetar",
            "Digunakan dalam gamelan Bali",
          ],
        },
        {
          foto: musikbali3,
          nama: "Gangsa",
          deskripsi:
            "Gangsa adalah bagian penting dari gamelan Bali yang menghasilkan melodi utama. Alat ini memiliki bilah logam dan dimainkan dengan teknik pukulan cepat.",
          ciri: [
            "Bagian dari gamelan",
            "Menghasilkan melodi utama",
            "Dimainkan dengan cepat",
            "Bahan logam",
          ],
        },
        {
          foto: musikbali4,
          nama: "Gamelan Bali",
          deskripsi:
            "Gamelan Bali adalah ansambel musik tradisional yang terdiri dari berbagai alat seperti gangsa, gong, dan kendang. Digunakan dalam upacara adat dan pertunjukan seni.",
          ciri: [
            "Terdiri dari banyak alat musik",
            "Digunakan dalam upacara adat",
            "Irama dinamis dan kompleks",
            "Identitas utama musik Bali",
          ],
        },
      ],
    },

    senjata: {
      judul: "Senjata Tradisional",
      provinsi: "Bali",
      slides: [
        {
          foto: sbali1,
          nama: "Taji",
          deskripsi:
            "Taji adalah senjata tradisional Bali yang digunakan dalam tradisi sabung ayam (tajen). Senjata ini dipasang pada kaki ayam dan memiliki nilai budaya serta ritual dalam masyarakat Bali.",
          ciri: [
            "Berbentuk kecil dan tajam",
            "Digunakan dalam tradisi sabung ayam",
            "Terbuat dari logam",
            "Memiliki nilai budaya dan ritual",
          ],
        },
        {
          foto: sbali2,
          nama: "Keris Bali",
          deskripsi:
            "Keris Bali merupakan senjata tradisional yang memiliki nilai sakral dan spiritual. Selain sebagai senjata, keris juga digunakan dalam upacara adat dan menjadi simbol kehormatan.",
          ciri: [
            "Memiliki lekukan khas (luk)",
            "Mengandung nilai spiritual",
            "Digunakan dalam upacara adat",
            "Dihiasi ukiran indah",
          ],
        },
        {
          foto: sbali3,
          nama: "Kandik",
          deskripsi:
            "Kandik adalah senjata tradisional Bali yang digunakan sebagai alat pertahanan diri. Bentuknya sederhana namun memiliki fungsi penting dalam kehidupan masyarakat zaman dahulu.",
          ciri: [
            "Bentuk sederhana",
            "Digunakan untuk perlindungan diri",
            "Terbuat dari logam",
            "Merupakan bagian dari budaya lokal",
          ],
        },
      ],
    },
    makanan: {
      judul: "Makanan Khas Tradisional",
      provinsi: "Bali",
      slides: [
        {
          foto: makanbali1,
          nama: "Tum Ayam",
          deskripsi:
            "Tum Ayam adalah makanan khas Bali yang dibuat dari daging ayam cincang yang dibumbui rempah khas, kemudian dibungkus daun pisang dan dikukus. Rasanya gurih dan harum.",
          ciri: [
            "Dibungkus daun pisang",
            "Dimasak dengan cara dikukus",
            "Menggunakan bumbu khas Bali",
            "Aroma harum dan rasa gurih",
          ],
        },
        {
          foto: makanbali2,
          nama: "Sate Plecing Ayam",
          deskripsi:
            "Sate Plecing Ayam adalah sate khas Bali yang disajikan dengan sambal plecing yang pedas dan segar. Cocok sebagai hidangan pendamping nasi.",
          ciri: [
            "Disajikan dengan sambal plecing",
            "Rasa pedas dan segar",
            "Daging ayam dibakar",
            "Cocok sebagai lauk",
          ],
        },
        {
          foto: makanbali3,
          nama: "Sate Lilit Ayam",
          deskripsi:
            "Sate Lilit Ayam adalah sate khas Bali yang dibuat dari daging ayam cincang yang dililitkan pada batang serai, kemudian dibakar hingga matang.",
          ciri: [
            "Dililit pada batang serai",
            "Dibakar hingga matang",
            "Tekstur lembut",
            "Rasa khas rempah Bali",
          ],
        },
        {
          foto: makanbali4,
          nama: "Lawar Ayam",
          deskripsi:
            "Lawar Ayam adalah hidangan tradisional Bali yang terdiri dari campuran daging ayam, kelapa parut, dan bumbu khas. Biasanya disajikan dalam upacara adat.",
          ciri: [
            "Campuran daging dan kelapa",
            "Menggunakan bumbu khas Bali",
            "Sering disajikan saat upacara",
            "Rasa gurih dan kaya rempah",
          ],
        },
      ],
    },
  },
};

function DetailKategori() {
  const { id, kategori } = useParams();
  const data = dataKategori[id]?.[kategori];
  const [activeSlide, setActiveSlide] = useState(0);

  if (!data) {
    return (
      <div style={{ padding: "48px 80px" }}>
        <Link to={`/daerah/${id}`}>← Kembali</Link>
        <p>Konten tidak ditemukan.</p>
      </div>
    );
  }

  const slide = data.slides[activeSlide];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#FFF8F0" }}>
      <div
        style={{
          backgroundColor: "#8B2500",
          padding: "24px 80px",
          color: "white",
        }}
      >
        <Link
          to={`/daerah/${id}`}
          style={{
            color: "white",
            textDecoration: "none",
            textAlign: "left",
            fontSize: "14px",
            opacity: 0.8,
          }}
        >
          ← Kembali
        </Link>
        <h1
          style={{
            fontSize: "17px",
            fontWeight: "bold",
            marginTop: "8px",
          }}
        >
          {data.judul} <span style={{ opacity: 0.7 }}>— {data.provinsi}</span>
        </h1>
      </div>

      <div style={{ padding: "clamp(16px,5vw,40px) clamp(16px,6vw,80px)" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(20px,4vw,40px)",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                position: "relative",
              }}
            >
              <img
                src={slide.foto}
                alt={slide.nama}
                style={{
                  width: "100%",
                  height: "clamp(220px,40vw,340px)",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(139,37,0,0.8)",
                  padding: "10px 16px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "16px",
                    margin: 0,
                  }}
                >
                  {slide.nama}
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "16px",
              }}
            >
              {data.slides.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  style={{
                    width: i === activeSlide ? "28px" : "10px",
                    height: "10px",
                    borderRadius: "999px",
                    backgroundColor: i === activeSlide ? "#E8640C" : "#ddd",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                marginTop: "12px",
              }}
            >
              <button
                onClick={() =>
                  setActiveSlide(
                    activeSlide === 0
                      ? data.slides.length - 1
                      : activeSlide - 1,
                  )
                }
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "999px",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                  fontSize: "16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setActiveSlide(
                    activeSlide === data.slides.length - 1
                      ? 0
                      : activeSlide + 1,
                  )
                }
                style={{
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "999px",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                  fontSize: "16px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                ›
              </button>
            </div>
          </div>

          <div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#8B2500",
                marginBottom: "16px",
              }}
            >
              {slide.nama}
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "#555",
                lineHeight: "1.8",
                marginBottom: "24px",
              }}
            >
              {slide.deskripsi}
            </p>

            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "12px",
              }}
            >
              Ciri Khas:
            </h3>
            <ul
              style={{
                paddingLeft: "0",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {slide.ciri.map((c, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#E8640C",
                      flexShrink: 0,
                    }}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailKategori;
