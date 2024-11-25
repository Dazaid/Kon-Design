import { Box } from '@mui/material';
import { useScroll } from "../ScrollContext";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const MHome = () => {

  const { homeRef, servicosRef, portfolioRef, contactRef, scrollToSection } = useScroll()

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <Box ref={homeRef} className="flex justify-center items-center bg-cover h-[91.5vh] w-[100vw]">
        <img className='absolute w-[98vw] h-[100vh]  opacity-80  object-cover z-[-1]' src="/assets/HomeBkg.png" alt="background" />
        <Box className="absolute top-4 left-0">
          {/* Botón para abrir/cerrar el menú */}
          <a
            href="#menu"
            onClick={toggleMenu}
            aria-label="Ir al menu"
            className="p-2 ml-4 mb-4 text-white rounded focus:outline-none"
          >
            {isMenuOpen ? <CloseIcon className="MuiButtonBase-root MuiIconButton-root"
              tabIndex="0"
              type="button"
              aria-labelledby="close-button-label" aria-label="Cerrar menu" sx={{ fontSize: 40 }} /> : <MenuIcon className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button" aria-labelledby="open-button-label" aria-label="Abrir menu" sx={{ fontSize: 40 }} />}
          </a>


          {/* Menú desplegable */}
          {isMenuOpen && (
            <Box className="flex flex-col justify-center items-center text-center w-full bg-black text-[#ffbb00] font-semibold text-2xl z-10">

              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault(); // Evita el comportamiento predeterminado de navegación
                  scrollToSection(homeRef); // Función para desplazarte a la sección
                  toggleMenu(); // Función para cerrar el menú
                }}
                aria-label="Ir a la sección de inicio nav"
              >
                <p className="block w-[100vw] text-center p-3">Home</p>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(contactRef);
                  toggleMenu();
                }}
                aria-label="Ir a la sección Sobre nós nav"
              >
                <p className="block w-[100vw] text-center p-3">Sobre nós</p>
              </a>
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(servicosRef);
                  toggleMenu();
                }}
                aria-label="Ir a la sección Serviços nav"
              >
                <p className="block w-[100vw] text-center p-3">Serviços</p>
              </a>
              <a
                href="#portfolio"

                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(portfolioRef);
                  toggleMenu();
                }}
                aria-label="Ir a la sección Portfólio nav"
              >
                <p className="block w-[100vw] text-center p-3">Portfólio</p>
              </a>
            </Box>
          )}
        </Box>

        <Box className="flex flex-row text-white h-[51vh] gap-24">
          <Box className="flex flex-col gap-24">
            <img className='w-20' src="assets/Logo.webp" alt="logo" />
            <Box>
              <h2 className='text-3xl'>
                <strong>Design</strong>  para <br />
                empresas que <br />
                <b> fazem a diferença!</b>
              </h2>
              <Box className="mb-2 bg-gradient-to-r from-[#090310] from-10% via-[#6d2f95] via-50% to-[#fbba07] to-90% w-[12rem] h-[0.65vh] mt-2"></Box>
              <h1><strong className='text-[#a700ff] text-xl'>Branding, Web & Print.</strong></h1>
            </Box>
            <Box className="flex flex-col gap-4">
              <a className="flex flex-row items-center justify-center font-bold bg-gradient-to-r from-[#7bf309] from-10% via-[#3f9306] via-50% to-[#083b03] to-90% text-white rounded-lg py-2 px-14" aria-label="Ir a WhatsApp desde home" target="_blank" href="https://wa.me/351913916397">
                <svg className="fill-white mr-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>Whatsapp

              </a>


            </Box>
          </Box>


        </Box>

      </Box>
    </>
  );
};

export default MHome;
