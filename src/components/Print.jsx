import { Box } from '@mui/material';
import Carousel from './Carousel';
const Print = () => {

  const AcaiConcept = [
    'assets/AcaiConcept/Slide1.jpg',
    'assets/AcaiConcept/Slide2.jpg',
    'assets/AcaiConcept/Slide3.jpg',
    'assets/AcaiConcept/Slide4.jpg',
    'assets/AcaiConcept/Slide5.jpg',
  ];

  const Automotive = [
    'assets/Automotive/Slide25.jpg',
    'assets/Automotive/Slide26.jpg',
    'assets/Automotive/Slide27.jpg',
    'assets/Automotive/Slide28.jpg',
    'assets/Automotive/Slide29.jpg',
  ];

  const Vitalife = [
    'assets/Vitalife/Slide20.jpg',
    'assets/Vitalife/Slide21.jpg',
  ];


  const Pilates = [
    'assets/Pilates/Slide23.jpg',
    'assets/Pilates/Slide24.jpg',
  ];

  const Kantar2 = [
    'assets/Kantar2/Slide30.jpg',
    'assets/Kantar2/Slide31.jpg',
    'assets/Kantar2/Slide32.jpg',
    'assets/Kantar2/Slide33.jpg',
  ];

  const MayconGerald = [
    'assets/MayconGerald/Slide34.jpg',
    'assets/MayconGerald/Slide35.jpg',
    'assets/MayconGerald/Slide36.jpg',
  ];

  return (
    <>
      <Box className="flex flex-col justify-center items-center bg-[#fff] w-[100vw] pt-16">
        <Box className="flex flex-row gap-16">
          <h3 className="text-7xl font-bold ">PRINTING</h3>
          <p>
          Confira todos os nossos projetos impressos, <br />
          como cartões de visita, montras, cavaletes, <br />
          autocolantes em vinil e etc. Estamos à vossa <br />
          disposição para auxiliar no que for preciso!
          </p>
        </Box>
        <Box className="flex flex-row gap-16 scale-[0.65]">
          <Carousel images={AcaiConcept} />
          <Carousel images={Automotive} />
          <Carousel images={Vitalife} />
        </Box>
        <Box className="relative bottom-20 flex flex-row gap-16 scale-[0.65]">
          <Carousel images={Pilates} />
          <Carousel images={Kantar2} />
          <Carousel images={MayconGerald} />
        </Box>
      </Box>
    </>
  );
};

export default Print;
