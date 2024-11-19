import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from './components/Home.jsx'
import Feedback from './components/Feedback.jsx'
import Portfolio from './components/Portfolio.jsx'
import Brand from './components/Brand.jsx';
import { Box } from '@mui/material'

function App() {

  return (
    <>
      <Box className="overflow-x-hidden">
        <Home />
        <Feedback />
        <Portfolio />
        <Brand />
      </Box>
    </>
  )
}

export default App
