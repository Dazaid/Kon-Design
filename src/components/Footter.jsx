import { Box } from '@mui/material';
const Footter = () => {

  return (
    <>
      <footer className='bg-black text-white'>
        <Box className="bg-black py-6 w-[100vw] flex flex-col gap-6 justify-center items-center ">
          <img src="assets/Logo-KonDesign.webp" alt="Logo Footer" />
          <Box className="flex flex-row gap-6 text-2xl">
            <a aria-name="home" href="">
              <p className='hover:text-[#fbba07] transition-all duration-300'>Home</p>
            </a><a aria-name="sobre" href="">
              <p className='hover:text-[#fbba07] transition-all duration-300'>Sobre nós</p>
            </a><a aria-name="servicos" href="">
              <p className='hover:text-[#fbba07] transition-all duration-300'>Serviços</p>
            </a><a aria-name="portifolio" href="">
              <p className='hover:text-[#fbba07] transition-all duration-300'>Portifolio</p>
            </a>
          </Box>
          <h6> 2024 © KonDesign. Todos os direitos reservados</h6>
        </Box>
        <Box class="bg-gradient-to-r from-[#6d2f95] from-10% via-[#090310] via-50% to-[#fbba07] to-90% w-[100vw] h-[5vh] mt-2"></Box>
      </footer>
    </>
  );
};

export default Footter;
