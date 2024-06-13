import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Career from "./components/Career";

//import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/career' element={<Career />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes> */}
      <Home />
      <About />
      <Skills />
      <Career />
      <Projects />
    </>
  );
}

export default App;