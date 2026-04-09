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
import taripapua1 from "../assets/taripapua1.jpg";
import taripapua2 from "../assets/taripapua2.jpg";
import taripapua3 from "../assets/taripapua3.jpg";
import bajupapua1 from "../assets/bajupapua1.jpg";
import musikpapua1 from "../assets/musikpapua1.jpg";
import musikpapua2 from "../assets/musikpapua2.jpg";
import musikpapua3 from "../assets/musikpapua3.png";
import spapua1 from "../assets/spapua1.jpg";
import spapua2 from "../assets/spapua2.jpg";
import spapua3 from "../assets/spapua3.jpg";
import mpapua1 from "../assets/mpapua1.jpg";
import mpapua2 from "../assets/mpapua2.jpg";
import mpapua3 from "../assets/mpapua3.jpg";

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

  papua: {
    tarian: {
      judul: "Tarian Tradisional",
      provinsi: "Papua",
      slides: [
        {
          foto: taripapua1,
          nama: "Tari Sajojo",
          deskripsi:
            "Tari Sajojo adalah tarian pergaulan khas Papua yang energik dan penuh semangat. Tarian ini dibawakan secara berkelompok dengan gerakan kaki yang dinamis dan ritmis mengikuti irama musik.",
          ciri: [
            "Dibawakan secara berkelompok",
            "Gerakan kaki yang dinamis",
            "Irama musik yang energik",
            "Tarian pergaulan yang menyenangkan",
          ],
        },
        {
          foto: taripapua2,
          nama: "Tari Pangkur Sagu",
          deskripsi:
            "Tari Pangkur Sagu menggambarkan proses pembuatan sagu yang merupakan makanan pokok masyarakat Papua. Tarian ini mencerminkan kehidupan sehari-hari dan kearifan lokal masyarakat Papua.",
          ciri: [
            "Menggambarkan proses pengolahan sagu",
            "Mencerminkan kehidupan sehari-hari",
            "Gerakan yang naturalis",
            "Kaya makna budaya lokal",
          ],
        },
        {
          foto: taripapua3,
          nama: "Tari Cendrawasih",
          deskripsi:
            "Tari Cendrawasih terinspirasi dari keindahan burung Cendrawasih, burung khas Papua yang terkenal dengan keindahan bulunya. Tarian ini menggambarkan keanggunan dan kebebasan burung tersebut.",
          ciri: [
            "Terinspirasi dari burung Cendrawasih",
            "Gerakan anggun dan lembut",
            "Kostum menyerupai bulu burung",
            "Melambangkan kebebasan dan keindahan",
          ],
        },
      ],
    },
    pakaian: {
      judul: "Pakaian Tradisional",
      provinsi: "Papua",
      slides: [
        {
          foto: bajupapua1,
          nama: "Sali dan Rok Rumbai",
          deskripsi:
            "Sali adalah pakaian tradisional wanita Papua berupa rok yang terbuat dari serat alam. Rok Rumbai merupakan pakaian khas yang digunakan dalam upacara adat dan tarian tradisional Papua.",
          ciri: [
            "Terbuat dari serat alam alami",
            "Digunakan dalam upacara adat",
            "Merupakan pakaian khas wanita Papua",
            "Mencerminkan kearifan lokal",
          ],
        },
      ],
    },
    musik: {
      judul: "Alat Musik Tradisional",
      provinsi: "Papua",
      slides: [
        {
          foto: musikpapua1,
          nama: "Triton",
          deskripsi:
            "Triton adalah alat musik tiup tradisional Papua yang terbuat dari cangkang kerang laut besar. Suaranya yang keras dan khas digunakan untuk komunikasi antar kampung dan upacara adat.",
          ciri: [
            "Terbuat dari cangkang kerang",
            "Alat musik tiup",
            "Suara keras dan khas",
            "Digunakan untuk komunikasi dan upacara",
          ],
        },
        {
          foto: musikpapua2,
          nama: "Tifa",
          deskripsi:
            "Tifa adalah alat musik pukul khas Papua dan Maluku yang terbuat dari kayu berongga dengan membran kulit binatang. Tifa digunakan dalam berbagai upacara adat dan pertunjukan seni.",
          ciri: [
            "Terbuat dari kayu berongga",
            "Membran dari kulit binatang",
            "Alat musik pukul",
            "Digunakan dalam upacara adat",
          ],
        },
        {
          foto: musikpapua3,
          nama: "Fuu",
          deskripsi:
            "Fuu adalah alat musik tiup tradisional Papua yang terbuat dari bambu. Alat musik ini menghasilkan suara yang unik dan digunakan dalam berbagai kegiatan budaya masyarakat Papua.",
          ciri: [
            "Terbuat dari bambu",
            "Alat musik tiup",
            "Suara unik khas Papua",
            "Digunakan dalam kegiatan budaya",
          ],
        },
      ],
    },
    senjata: {
      judul: "Senjata Tradisional",
      provinsi: "Papua",
      slides: [
        {
          foto: spapua1,
          nama: "Belati",
          deskripsi:
            "Belati Papua adalah senjata tradisional yang terbuat dari tulang burung kasuari. Senjata ini memiliki nilai budaya tinggi dan digunakan dalam upacara adat serta sebagai alat berburu.",
          ciri: [
            "Terbuat dari tulang burung kasuari",
            "Memiliki nilai budaya tinggi",
            "Digunakan dalam upacara adat",
            "Berfungsi sebagai alat berburu",
          ],
        },
        {
          foto: spapua2,
          nama: "Kapak Batu",
          deskripsi:
            "Kapak Batu adalah senjata dan alat tradisional Papua yang terbuat dari batu yang diasah hingga tajam. Kapak ini digunakan sebagai alat pertahanan dan peralatan sehari-hari.",
          ciri: [
            "Terbuat dari batu yang diasah",
            "Berfungsi sebagai senjata dan alat",
            "Digunakan untuk pertahanan diri",
            "Peralatan penting zaman dahulu",
          ],
        },
        {
          foto: spapua3,
          nama: "Tombak (Tul)",
          deskripsi:
            "Tombak atau Tul adalah senjata tradisional Papua yang digunakan untuk berburu dan berperang. Tombak Papua memiliki bentuk yang khas dengan ujung yang tajam dan terbuat dari kayu keras.",
          ciri: [
            "Terbuat dari kayu keras",
            "Digunakan untuk berburu dan berperang",
            "Ujung yang tajam dan kuat",
            "Senjata utama masyarakat Papua",
          ],
        },
      ],
    },
    makanan: {
      judul: "Makanan Khas Tradisional",
      provinsi: "Papua",
      slides: [
        {
          foto: mpapua1,
          nama: "Ulat Sagu",
          deskripsi:
            "Ulat Sagu adalah makanan tradisional Papua yang berasal dari larva kumbang yang hidup di pohon sagu. Makanan ini kaya protein dan telah menjadi bagian dari tradisi kuliner masyarakat Papua.",
          ciri: [
            "Sumber protein tinggi",
            "Berasal dari larva kumbang sagu",
            "Makanan tradisional bernutrisi",
            "Bagian dari tradisi kuliner Papua",
          ],
        },
        {
          foto: mpapua2,
          nama: "Udang Selingkuh",
          deskripsi:
            "Udang Selingkuh adalah kuliner khas Papua yang unik, merupakan udang air tawar dengan capit seperti kepiting. Hidangan ini sangat populer di Wamena dan menjadi kebanggaan kuliner Papua.",
          ciri: [
            "Udang air tawar dengan capit kepiting",
            "Populer di daerah Wamena",
            "Rasa yang khas dan lezat",
            "Kebanggaan kuliner Papua",
          ],
        },
        {
          foto: mpapua3,
          nama: "Papeda Ikan Kuah Kuning",
          deskripsi:
            "Papeda adalah makanan pokok khas Papua yang terbuat dari tepung sagu. Biasanya disajikan dengan ikan kuah kuning yang kaya rempah, menjadikannya hidangan yang lezat dan bergizi.",
          ciri: [
            "Terbuat dari tepung sagu",
            "Makanan pokok masyarakat Papua",
            "Disajikan dengan ikan kuah kuning",
            "Kaya rempah dan bergizi",
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
          padding: "24px clamp(16px, 6vw, 80px)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Link
          to={`/daerah/${id}`}
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
