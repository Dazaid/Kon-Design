import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, HashRouter, Navigate   } from "react-router-dom"
import { Box } from "@mui/material";
import { ScrollProvider } from "./ScrollContext";

import Home from "./components/Home.jsx";
import Feedback from "./components/Feedback.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Brand from "./components/Brand.jsx";
import Print from "./components/Print.jsx";
import Web from "./components/Web.jsx";
import Clientes from "./components/Clientes.jsx";
import About from "./components/About.jsx";
import ContactAndPrefooter from "./components/Contactandprefooter.jsx";
import Footter from "./components/Footter.jsx";

import MHome from "./mobileComponents/MHome.jsx";
import MFeedback from "./mobileComponents/MFeedback.jsx";
import MPortfolio from "./mobileComponents/MPortfolio.jsx";
import MBrand from "./mobileComponents/MBrand.jsx";
import MPrint from "./mobileComponents/MPrint.jsx";
import MWeb from "./mobileComponents/MWeb.jsx";
import MClientes from "./mobileComponents/MClientes.jsx";
import MAbout from "./mobileComponents/MAbout.jsx";
import MContactAndPrefooter from "./mobileComponents/MContactAndPrefooter.jsx";
import MFootter from "./mobileComponents/MFootter.jsx";

function App() {
  // Estado para detectar si es un dispositivo móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    // Función para manejar el cambio de tamaño
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    // Escuchar el evento resize
    window.addEventListener("resize", handleResize);

    // Limpieza al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScrollProvider>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={

              <Box className="overflow-x-hidden">
                {isMobile ? (
                  //  móvil
                  <>
                    <MHome />
                    <MFeedback />
                    <MPortfolio />
                    <MBrand />
                    <MPrint />
                    <MWeb />
                    <MClientes />
                    <MAbout />
                    <MContactAndPrefooter />
                    <MFootter />
                  </>
                ) : (
                  // pc
                  <>
                    <Home />
                    <Feedback />
                    <Portfolio />
                    <Brand />
                    <Print />
                    <Web />
                    <Clientes />
                    <About />
                    <ContactAndPrefooter />
                    <Footter />
                  </>
                )}
              </Box>

            }
          />

          {/* Rutas principales */}
          <Route path="/home" element={isMobile ? <MHome /> : <Home />} />
          <Route path="/portfolio" element={isMobile ? <MPortfolio /> : <Portfolio />} />
          <Route path="/sobre-nos" element={isMobile ? <MAbout /> : <About />} />
          <Route path="/grandes-formatos" element={isMobile ? <MPrint /> : <Print />} />
          <Route path="/redes-sociais" element={isMobile ? <MPortfolio /> : <Portfolio />} />
          <Route path="/contatenos" element={isMobile ? <MFootter /> : <Footter />} />

          {/* Redirecciones de rutas no canónicas */}
          <Route path="/decoracao-de-montra" element={<Navigate to="/portfolio" replace />} />
          <Route path="/letras-en-relieve" element={<Navigate to="/grandes-formatos" replace />} />

          {/* Ruta por defecto si el usuario navega a una no definida */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </HashRouter >
    </ScrollProvider >
  );
}

export default App;