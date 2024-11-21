import { Box } from '@mui/material';
import { useScroll } from "../ScrollContext";
const MFootter = () => {

  const { homeRef, servicosRef, portfolioRef, contactRef, scrollToSection } = useScroll()

  return (
    <>
      <footer className='bg-black text-white'>
        <Box className="bg-black py-6 w-[100vw] flex flex-col gap-6 justify-center items-center ">
          <img className="w-[40vw]" src="assets/Logo-KonDesign.webp" alt="Logo Footer" />
          <Box className="flex flex-row gap-6 text-md">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault(); // Evita el comportamiento predeterminado de navegación
                scrollToSection(homeRef); // Función para desplazarte a la sección
                toggleMenu(); // Función para cerrar el menú
              }}
              aria-label="Ir a la sección de inicio"
            >
              Inicio
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault(); // Evita el comportamiento predeterminado de navegación
                scrollToSection(contactRef); // Función para desplazarte a la sección "contact"
                toggleMenu(); // Función para cerrar el menú si es necesario
              }}
              aria-label="Ir a la sección Sobre nós"
            >
              <p>Sobre&nbsp;nós</p>
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(servicosRef);
                toggleMenu();
              }}
              aria-label="Ir a la sección Serviços"
            >
              <p>Serviços</p>
            </a>

            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(portfolioRef);
                toggleMenu();
              }}
              aria-label="Ir a la sección Portifolio"
            >
              <p>Portifolio</p>
            </a>

          </Box>
          <p className='text-center'> 2024 © KonDesign. Todos os direitos reservados</p>
        </Box>
        <Box className="bg-gradient-to-r from-[#6d2f95] from-10% via-[#090310] via-50% to-[#fbba07] to-90% w-[100vw] h-[5vh] mt-2"></Box>
      </footer>
    </>
  );
};

export default MFootter;
