import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Daerah from "./pages/Daerah";
import DetailDaerah from "./pages/DetailDaerah";
import Kuis from "./pages/Kuis";
import Peta from "./pages/Peta";
import DetailKategori from "./pages/DetailKategori";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/login"
            element={
              <PageTransition>
                <Login />
              </PageTransition>
            }
          />
          <Route
            path="/daerah"
            element={
              <PageTransition>
                <Daerah />
              </PageTransition>
            }
          />
          <Route
            path="/daerah/:id"
            element={
              <PageTransition>
                <DetailDaerah />
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
                <Kuis />
              </PageTransition>
            }
          />
          <Route
            path="/peta"
            element={
              <PageTransition>
                <Peta />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
