import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Login2 from "./pages/Login2";
import Daerah from "./pages/Daerah";
import DetailDaerah from "./pages/DetailDaerah";
import DetailKategori from "./pages/DetailKategori";
import Profil from "./pages/Profil";
import Kuis from "./pages/Kuis";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sudahDibaca, setSudahDibaca] = useState([]);
  const [sedangDipelajari, setSedangDipelajari] = useState([]);
  const [nilaiKuis, setNilaiKuis] = useState({});

  return (
    <AnimatePresence mode="wait">
      <Routes>
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

        <Route
          path="/login/:mode"
          element={
            isLoggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login2 onLogin={() => setIsLoggedIn(true)} />
            )
          }
        />

        <Route
          path="/*"
          element={
            isLoggedIn ? (
              <>
                <Navbar onLogout={() => setIsLoggedIn(false)} />
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
                          onTandai={(id) =>
                            setSudahDibaca([...sudahDibaca, id])
                          }
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
                            setNilaiKuis({ ...nilaiKuis, [id]: nilai })
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
