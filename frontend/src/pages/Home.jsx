import { Link } from "react-router-dom";
import { useState } from "react";
import wayang from "../assets/wayang.png";
import motif from "../assets/motif.png";
import perahu from "../assets/perahu.png";
import iconKalender from "../assets/iconKalender.png";
import iconDaerah from "../assets/iconDaerah.png";
import iconPeta from "../assets/iconPeta.png";
import acehFest from "../assets/acehFest.png";
import minangFest from "../assets/minangFest.png";

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

function Home() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const events = [
    {
      id: 1,
      title: "Festival Perahu Naga",
      desc: "Ajang olahraga air tahunan untuk menjaring atlet dayung potensial dan meningkatkan pariwisata, yang digelar di Situ Tujuh Muara.",
      tanggal: "13 Desember 2026",
      lokasi: "Setu Sawangan, Kota Depok, Jawa Barat",
      penyelenggara: "Penyelenggara: PODSI Kota Depok, KONI Depk",
      foto: perahu,
    },
    {
      id: 2,
      title: "Aceh Ramadhan Festival",
      desc: "Festival ini menggabungkan unsur budaya, kuliner, seni, dan kolaborasi kepedulian sosial.",
      tanggal: "1-7 Maret 2026",
      lokasi: "Masjid Raya Baiturrahman, Banda Aceh",
      penyelenggara: "Penyelenggara: Pemerintah Aceh",
      foto: acehFest,
    },
    {
      id: 3,
      title: "Festival Minangkabau",
      desc: "Perayaan budaya dan wisata terbesar di Sumatera Barat yang bertujuan melestarikan tradisi.",
      tanggal: "13 Desember 2026",
      lokasi: "Kabupaten Tanah Datar, Sumatera Barat",
      penyelenggara: "Penyelenggara: Dinas Pariwisata Kabupaten Tanah Datar",
      foto: minangFest,
    },
  ];
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <div style={{ minHeight: "100%", backgroundColor: "#FFF8F0" }}>
      <div
        style={{
          backgroundColor: "#8B2500",
          backgroundImage: `url(${motif})`,
          backgroundSize: "cover",
          backgroundBlendMode: "overlay",
          color: "white",
          padding: "64px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div style={{ maxWidth: "500px", marginLeft: "80px" }}>
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Selamat datang di <br />
            <span
              style={{
                fontFamily: "'Prosto One', serif",
                color: "#E8640C",
                WebkitTextStroke: "0.1px #FFB347",
              }}
            >
              NekaKultur
            </span>
          </h1>
          <p
            style={{ fontSize: "16px", marginBottom: "32px", color: "#f0d0c0" }}
          >
            NekaKultur adalah platform edukasi interaktif yang didedikasikan
            untuk melestarikan dan mempromosikan kekayaan budaya Indonesia.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link
              to="/daerah"
              className="card-hover"
              style={{
                backgroundColor: "#E8640C",
                color: "white",
                fontWeight: "bold",
                padding: "11px 24px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Mulai Belajar
            </Link>
            <Link
              to="/login"
              className="card-hover"
              style={{
                backgroundColor: "white",
                color: "#8B2500",
                fontWeight: "bold",
                padding: "11px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                border: "2px solid white",
              }}
            >
              Lihat Profil
            </Link>
          </div>
        </div>
        <img
          src={wayang}
          alt="Wayang"
          style={{ width: "220px", objectFit: "contain", marginRight: "150px" }}
        />
      </div>

      <div style={{ padding: "32px 48px" }}>
        <h2 style={{ fontWeight: "bold", color: "#8B2500", fontSize: "19px" }}>
          Agenda Budaya Mendatang
        </h2>
        <p style={{ color: "#888", fontSize: "14px", marginBottom: "16px" }}>
          Jangan lewatkan acara budaya menarik dari berbagai daerah
        </p>

        <div style={{ position: "relative" }}>
          <div
            className="card-hover"
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              key={activeEvent}
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                animation: "slideIn 0.3s ease",
              }}
            >
              <img
                src={events[activeEvent].foto}
                alt={events[activeEvent].title}
                style={{
                  width: "130px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    marginBottom: "8px",
                    color: "#E8640C",
                  }}
                >
                  {events[activeEvent].title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    marginBottom: "8px",
                  }}
                >
                  {events[activeEvent].desc}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#999",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <img
                    src={iconKalender}
                    style={{ width: "13px", height: "14px" }}
                  />
                  {events[activeEvent].tanggal}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#999",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <img
                    src={iconDaerah}
                    style={{ width: "13px", height: "14px" }}
                  />
                  {events[activeEvent].lokasi}
                </p>
                <p
                  style={{ fontSize: "11px", color: "#bbb", marginTop: "4px" }}
                >
                  {events[activeEvent].penyelenggara}
                </p>
              </div>
            </div>
            <button
              className="card-hover"
              style={{
                backgroundColor: "#E8640C",
                color: "white",
                fontWeight: "bold",
                padding: "10px",
                borderRadius: "8px",
                width: "100%",
                border: "none",
                cursor: "pointer",
              }}
            >
              + Tambahkan Ke Kalender
            </button>
          </div>

          <button
            onClick={() =>
              setActiveEvent(
                activeEvent === 0 ? events.length - 1 : activeEvent - 1,
              )
            }
            style={{
              position: "absolute",
              left: "-20px",
              top: "45%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            ‹
          </button>

          <button
            onClick={() =>
              setActiveEvent(
                activeEvent === events.length - 1 ? 0 : activeEvent + 1,
              )
            }
            style={{
              position: "absolute",
              right: "-20px",
              top: "45%",
              transform: "translateY(-50%)",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              cursor: "pointer",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            ›
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "16px",
          }}
        >
          {events.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveEvent(i)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: i === activeEvent ? "#E8640C" : "#ddd",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          padding: "0 48px 48px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
        }}
      >
        <div>
          <h2
            style={{ fontWeight: "bold", color: "#8B2500", fontSize: "19px" }}
          >
            Jelajahi Daerah
          </h2>
          <p style={{ color: "#888", fontSize: "14px", marginBottom: "16px" }}>
            Pelajari kebudayaan dari berbagai daerah di Indonesia
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div
              className="card-hover"
              style={{
                backgroundColor: "#E8640C",
                borderRadius: "16px",
                padding: "20px",
                color: "white",
              }}
            >
              <img
                src={iconDaerah}
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                  marginBottom: "8px",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <h3 style={{ fontWeight: "bold", fontSize: "15px" }}>
                Lihat Daftar
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                  opacity: 0.9,
                }}
              >
                Jelajahi semua provinsi dalam tampilan daftar lengkap dengan
                detail kebudayaan
              </p>
              <Link
                to="/daerah"
                className="card-hover"
                style={{
                  fontSize: "12px",
                  color: "white",
                  marginTop: "8px",
                  display: "block",
                }}
              >
                Lihat Semua Provinsi →
              </Link>
            </div>
            <div
              className="card-hover"
              style={{
                backgroundColor: "#2D6A4F",
                borderRadius: "16px",
                padding: "20px",
                color: "white",
              }}
            >
              <img
                src={iconPeta}
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                  marginBottom: "8px",
                  filter: "brightness(0) invert(1)",
                }}
              />
              <h3 style={{ fontWeight: "bold", fontSize: "15px" }}>
                Peta Interaktif
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                  opacity: 0.9,
                }}
              >
                Jelajahi Indonesia melalui peta interaktif dengan ikon unik
                setiap provinsi
              </p>
              <Link
                to="/peta"
                className="card-hover"
                style={{
                  fontSize: "12px",
                  color: "white",
                  marginTop: "8px",
                  display: "block",
                }}
              >
                Buka Peta Indonesia →
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2
            style={{ fontWeight: "bold", color: "#8B2500", fontSize: "19px" }}
          >
            Kalender
          </h2>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              padding: "16px",
              marginTop: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#E8640C",
                color: "white",
                fontWeight: "bold",
                padding: "8px 12px",
                borderRadius: "8px",
                marginBottom: "12px",
              }}
            >
              <button
                onClick={() => {
                  if (currentMonth === 0) {
                    setCurrentMonth(11);
                    setCurrentYear(currentYear - 1);
                  } else setCurrentMonth(currentMonth - 1);
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                ‹
              </button>
              <span>
                {monthNames[currentMonth]} {currentYear}
              </span>
              <button
                onClick={() => {
                  if (currentMonth === 11) {
                    setCurrentMonth(0);
                    setCurrentYear(currentYear + 1);
                  } else setCurrentMonth(currentMonth + 1);
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                ›
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(7, 1fr)",
                textAlign: "center",
                fontSize: "13px",
                gap: "4px",
              }}
            >
              {["M", "S", "S", "R", "K", "J", "S"].map((d, i) => (
                <div
                  key={i}
                  style={{
                    fontWeight: "bold",
                    color: "#999",
                    paddingBottom: "4px",
                  }}
                >
                  {d}
                </div>
              ))}

              {Array.from(
                { length: firstDay === 0 ? 6 : firstDay - 1 },
                (_, i) => (
                  <div key={`empty-${i}`} />
                ),
              )}

              {Array.from({ length: daysInMonth }, (_, i) => {
                const isToday =
                  i + 1 === today.getDate() &&
                  currentMonth === today.getMonth() &&
                  currentYear === today.getFullYear();
                return (
                  <div
                    key={i}
                    style={{
                      padding: "4px",
                      borderRadius: "8px",
                      backgroundColor: isToday ? "#E8640C" : "transparent",
                      color: isToday ? "white" : "#333",
                      cursor: "pointer",
                      fontWeight: isToday ? "bold" : "normal",
                    }}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              <Link
                to="/kalender"
                className="card-hover"
                style={{
                  marginTop: "16px",
                  backgroundColor: "#2D6A4F",
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "100%",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Buka Kalender Lengkap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
