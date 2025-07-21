import { useEffect } from 'react';
import AOS from 'aos'; // ✅ Import AOS only once
import 'aos/dist/aos.css';
import './App.css'
import About from './Components/About'
import Clients from './Components/clients'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer'
import Hero from './Components/Landing'
import Navbar from './Components/Navigation'
import Project from './Components/Project'
import Skill from './Components/Skill'
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
function App() {
 
useEffect(() => {
    AOS.init({
      // duration: 500, // Animation duration in ms
      // once: true,     // Animate only once
    });
  }, []);
  return (
    <>
<Navbar/>
<Hero/>
<About/>
<Skill/>
<Project/>
<Clients/>
<Contactus/>
<Footer/>

     </>
  )
}

export default App
