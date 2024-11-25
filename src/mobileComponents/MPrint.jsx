import { Box } from '@mui/material';
import MCarousel from './MCarousel';
const MPrint = () => {

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

 
  // const MayconGerald = [
  //   'assets/MayconGerald/Slide34.jpg',
  //   'assets/MayconGerald/Slide35.jpg',
  //   'assets/MayconGerald/Slide36.jpg',
  // ];

  const GF1 = [
    'assets/GrandesFormatos/sl1.jpg',
    'assets/GrandesFormatos/sl1.jpg',
    'assets/GrandesFormatos/sl1.jpg',
  ];

  const GF2 = [
    'assets/GrandesFormatos/sl2.jpg',
    'assets/GrandesFormatos/sl2.jpg',
    'assets/GrandesFormatos/sl2.jpg',
  ];

  const GF3 = [
    'assets/GrandesFormatos/sl3.jpg',
    'assets/GrandesFormatos/sl3.jpg',
    'assets/GrandesFormatos/sl3.jpg',   
  ]

  const GF4 = [
    'assets/GrandesFormatos/sl4.jpg',
    'assets/GrandesFormatos/sl4.jpg',
    'assets/GrandesFormatos/sl4.jpg',   
  ]

  const GF5 = [
    'assets/GrandesFormatos/sl5.jpg',
    'assets/GrandesFormatos/sl5.jpg',
    'assets/GrandesFormatos/sl5.jpg',
  ]

  const GF6 = [
    'assets/GrandesFormatos/sl6.jpg',
    'assets/GrandesFormatos/sl6.jpg',
    'assets/GrandesFormatos/sl6.jpg',
  ]

  const GF7 = [
    'assets/GrandesFormatos/sl7.jpg',
    'assets/GrandesFormatos/sl7.jpg',
    'assets/GrandesFormatos/sl7.jpg',
  ]

  return (
    <>
      <Box className="flex flex-col justify-center items-center bg-[#fff] w-[100vw] pt-16">
        <Box className="flex flex-col gap-5 text-center">
          <h3 className="text-5xl font-bold ">GRANDES FORMATOS</h3>
          <p className="text-xl w-[80vw]">
          Confira todos os nossos projetos impressos,
          como cartões de visita, montras, cavaletes, 
          autocolantes em vinil e etc. Estamos à vossa 
          disposição para auxiliar no que for preciso!
          </p>
        </Box>
        <Box className="flex flex-col gap-16 ml-2 scale-[0.68] my-[-50rem]">
          <MCarousel images={AcaiConcept} />
          <MCarousel images={Automotive} />
          <MCarousel images={Vitalife} />
          <MCarousel images={Pilates} />
          <MCarousel images={Kantar2} />
          <MCarousel images={GF7} />
          <MCarousel images={GF6} />
          <MCarousel images={GF5} />
          <MCarousel images={GF4} />
          <MCarousel images={GF3} />
          <MCarousel images={GF2} />
          <MCarousel images={GF1} />
        </Box>
      </Box>
    </>
  );
};

export default MPrint;
