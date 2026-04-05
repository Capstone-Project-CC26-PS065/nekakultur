import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import iconBeranda from "../assets/iconBeranda.png";
import iconBeranda2 from "../assets/iconBeranda2.png";
import iconDaerah from "../assets/iconDaerah.png";
import iconDaerah2 from "../assets/iconDaerah2.png";
import iconProfil from "../assets/iconProfil.png";
import iconProfil2 from "../assets/iconProfil2.png";
import logo from "../assets/logo.png";

function Navbar() {
  const Location = useLocation();

  const menu = [
    {
      path: "/",
      label: "Beranda",
      icon: iconBeranda,
      iconActive: iconBeranda2,
    },
    {
      path: "/daerah",
      label: "Daerah",
      icon: iconDaerah,
      iconActive: iconDaerah2,
    },
    {
      path: "/profil",
      label: "Profil",
      icon: iconProfil,
      iconActive: iconProfil2,
    },
  ];

  const [pillStyle, setPillStyle] = useState({});
  const isActive = (path) => {
    if (path === "/daerah") return Location.pathname.startsWith("/daerah");
    return Location.pathname === path;
  };
  const navRefs = useRef([]);

  useEffect(() => {
    const activeIndex = menu.findIndex((item) => isActive(item.path));
    const activeEl = navRefs.current[activeIndex];
    if (activeEl) {
      setPillStyle({
        left: activeEl.offsetLeft + "px",
        width: activeEl.offsetWidth + "px",
      });
    }
  }, [Location.pathname]);

  return (
    <nav
      style={{
        backgroundColor: "white",
        padding: "12px 32px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "100px",
        boxShadow: "0 2px 8px #4c4b4b",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Link
        to="/"
        style={{
          color: "#ff6600",
          fontWeight: "bold",
          fontSize: "20px",
          textDecoration: "none",
          marginLeft: "250px",
          fontFamily: "'Prosto One', serif",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "30px", height: "30px", objectFit: "contain" }}
        />
        NekaKultur
      </Link>
      <div style={{ display: "flex", gap: "4px", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            height: "100%",
            backgroundColor: "#FFF0E0",
            borderRadius: "999px",
            transition: "left 0.3s ease, width 0.3s ease",
            ...pillStyle,
          }}
        />
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            ref={(el) => (navRefs.current[menu.indexOf(item)] = el)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "999px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: isActive(item.path) ? "bold" : "normal",
              position: "relative",
              zIndex: 1,
              backgroundColor: "transparent",
              color: isActive(item.path) ? "#E8640C" : "#000000",
            }}
          >
            <img
              src={isActive(item.path) ? item.iconActive : item.icon}
              alt={item.label}
              style={{ width: "18px", height: "18px", objectFit: "contain" }}
            />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
