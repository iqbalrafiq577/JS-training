import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Certification from './components/Certifications';
import Services from './components/Services';
import Technologies from './components/technologies';
import BookConsultation from './components/BookConsultation';
import Cards from './components/cards';
import WhoWeAre from './components/WhoWeAre';
import WhoWe from './components/WhoWeAre';
import Brands from './components/Brands';
import SubHero from './components/SubHero';
import PressRelease from './components/PressRelease';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import "./assets/style/variables.css";

function App() {
  return (
    <div className="App">
     <TopBar/>
     <Navbar/>
     <Hero/>
     <BookConsultation/>
     <Certification/>
     <Services/>
     <Technologies/>
    <WhoWe/>
     <Cards/>
     <Brands/>
     <SubHero/>
     <PressRelease/>
     <ContactUs/>
     <Footer/>
    </div>
  );
}

export default App;
