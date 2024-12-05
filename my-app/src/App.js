import React from 'react'
// import Navbar from './Navbar'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Dinning from './components/Dinning';
import Program from './components/Program';
import Membership from './components/Membership';
import Meeting from './components/Meeting';
import Specials from './components/Specials';
import Location from './components/Location';

const App = () => {
  return (
    <div>
      <div>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
           
            <Route path="/about"  element={<About/>} />
            <Route path="/dinning"  element={<Dinning/>} />
            <Route path="/program"  element={<Program/>} />
            <Route path="/guest"  element={<Membership/>} />
            <Route path="/meeting"  element={<Meeting/>} />
            <Route path="/speacial"  element={<Specials/>} />
            <Route path="/location"  element={<Location/>} />
          </Routes>
        </BrowserRouter>
       
      </div>
    </div>
  )
}

export default App

