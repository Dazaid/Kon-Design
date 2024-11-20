import { Box } from '@mui/material';
import { useScroll } from "../ScrollContext";
const Footter = () => {
  const { homeRef, servicosRef, portfolioRef, contactRef, scrollToSection } = useScroll()
  return (
    <>
      <footer className='bg-black text-white'>
        <Box className="bg-black py-6 w-[100vw] flex flex-col gap-6 justify-center items-center ">
          <img src="assets/Logo-KonDesign.webp" alt="Logo Footer" />
          <Box className="flex flex-row gap-6 text-2xl">
          <a
              href="#home"
              onClick={(e) => {
                e.preventDefault(); // Evita el comportamiento predeterminado de navegación
                scrollToSection(homeRef); // Función para desplazarte a la sección
                toggleMenu(); // Función para cerrar el menú
              }}
              aria-label="Ir a la sección de inicio"
            >
              <p className='hover:text-[#fbba07] transition-all duration-300'>Home</p>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault(); 
                scrollToSection(contactRef);
                toggleMenu();
              }}
              aria-label="Ir a la sección Sobre nós"
            >
              <p className='hover:text-[#fbba07] transition-all duration-300'>Sobre nós</p>
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
              <p className='hover:text-[#fbba07] transition-all duration-300'>Serviços</p>
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
              <p className='hover:text-[#fbba07] transition-all duration-300'>Portifolio</p>
            </a>
          </Box>
          <> 2024 © KonDesign. Todos os direitos reservados</>
        </Box>
        <Box className="bg-gradient-to-r from-[#6d2f95] from-10% via-[#090310] via-50% to-[#fbba07] to-90% w-[100vw] h-[5vh] mt-2"></Box>
      </footer>
    </>
  );
};

export default Footter;
