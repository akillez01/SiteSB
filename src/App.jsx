import { BrowserRouter } from "react-router-dom";
import { 
  Navbar, 
  Hero, 
  About, 
  Skills,  
  Experience, 
  Contact, 
  Footer,
  ParticleBackground 
} from "./components";
import logo from './assets/logo_sb.png'; // ✅ import da logo

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <ParticleBackground />

        {/* ✅ Logo centralizada no topo */}
        <div className="w-full flex justify-center py-4">
          <img 
            src={logo} 
            alt="Logo SB Tech & Support" 
            className="h-16 drop-shadow-xl"
          />
        </div>

        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
