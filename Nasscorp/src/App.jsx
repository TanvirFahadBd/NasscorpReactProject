import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/App.css'
import './assets/css/index.css'
import Navbar from './assets/Components/Navbar'
import FirstSection from './assets/Components/FirstSection'
import SecondSection from './assets/Components/SecondSection'
import ThirdSection from './assets/Components/ThirdSection'
import FourthSection from './assets/Components/FourthSection'
import FithSection from './assets/Components/FithSection'
import SixthSection from './assets/Components/SixthSection'
import FromSection from './assets/Components/FromSection'
import LastSection from './assets/Components/LastSection'
import Footer from './assets/Components/footer.jsx'



function App() {
  return(
    <>
    <Navbar/>
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    <FithSection/>
    <SixthSection/>
    <FromSection/>
    <LastSection/>
    <Footer/>

    
    </>

  )
}

export default App
