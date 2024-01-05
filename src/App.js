import About from "./Components/About";
import Contatcs from "./Components/Contatcs";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
 
  return (
    <>
    <div className="App">
      <Navigation/>
         <Home/>
         <About/>
         <Skills/>
         <Projects/>
         <Contatcs/>
    </div>
    </>
  );
}

export default App;
