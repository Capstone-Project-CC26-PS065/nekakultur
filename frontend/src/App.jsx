import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Daerah from "./pages/Daerah";
import DetailDaerah from "./pages/DetailDaerah";
import DetailKategori from "./pages/DetailKategori";
import Profil from "./pages/Profil";
import Kuis from "./pages/Kuis";
import EditProfil from "./pages/EditProfil";
import UploadKarya from "./pages/UploadKarya";

function App() {
  const location = useLocation();

  // 🔐 LOGIN STATE
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [sudahDibaca, setSudahDibaca] = useState(() => {
    return JSON.parse(localStorage.getItem("sudahDibaca")) || [];
  });
  const [sedangDipelajari, setSedangDipelajari] = useState([]);
  const [nilaiKuis, setNilaiKuis] = useState({});

  // ✅ AUTO LOGIN (CEK TOKEN)
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // 🔓 LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 🔐 LOGIN PAGE */}
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login onLogin={() => setIsLoggedIn(true)} />
            )
          }
        />

        {/* 🔒 PROTECTED ROUTES */}
        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <>
                <Navbar onLogout={handleLogout} />

                <Routes>
                  <Route
                    path="/"
                    element={
                      <PageTransition>
                        <Home />
                      </PageTransition>
                    }
                  />

                  <Route
                    path="/daerah"
                    element={
                      <PageTransition>
                        <Daerah
                          sudahDibaca={sudahDibaca}
                          sedangDipelajari={sedangDipelajari}
                          nilaiKuis={nilaiKuis}
                        />
                      </PageTransition>
                    }
                  />

                  <Route
                    path="/daerah/:id"
                    element={
                      <PageTransition>
                        <DetailDaerah
                          sudahDibaca={sudahDibaca}
                          onTandai={(id) => {
                            const updated = [...new Set([...sudahDibaca, id])];
                            setSudahDibaca(updated);
                            localStorage.setItem(
                              "sudahDibaca",
                              JSON.stringify(updated),
                            );
                          }}
                          onMulaiDipelajari={(id) => {
                            if (!sedangDipelajari.includes(id)) {
                              setSedangDipelajari([...sedangDipelajari, id]);
                            }
                          }}
                        />
                      </PageTransition>
                    }
                  />

                  <Route
                    path="/kategori/:id/:kategori"
                    element={
                      <PageTransition>
                        <DetailKategori />
                      </PageTransition>
                    }
                  />

                  <Route
                    path="/kuis/:id"
                    element={
                      <PageTransition>
                        <Kuis
                          onSelesaiKuis={(id, nilai) =>
                            setNilaiKuis({
                              ...nilaiKuis,
                              [id]: nilai,
                            })
                          }
                        />
                      </PageTransition>
                    }
                  />

                  <Route
                    path="/profil"
                    element={
                      <PageTransition>
                        <Profil />
                      </PageTransition>
                    }
                  />

                  <Route
                    path="/edit-profil"
                    element={
                      <PageTransition>
                        <EditProfil />
                      </PageTransition>
                    }
                  />

                  <Route
                    path="/upload"
                    element={
                      <PageTransition>
                        <UploadKarya />
                      </PageTransition>
                    }
                  />
                </Routes>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
