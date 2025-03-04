import logo from './logo.svg';
import './App.css';
import TopBar from './components/layout/TopBar';
import Hero from './components/sections/Hero';
import Navbar from './components/layout/Navbar';
import Certification from './components/sections/Certifications';
import Services from './components/sections/Services';
import Technologies from './components/sections/technologies';
import BookConsultation from './components/sections/BookConsultation';
import Cards from './components/cards';
import WhoWeAre from './components/sections/WhoWeAre';
import WhoWe from './components/sections/WhoWeAre';
import Brands from './components/sections/Brands';
import SubHero from './components/sections/SubHero';
import PressRelease from './components/sections/PressRelease';
import ContactUs from './pages/ContactUs';
import Footer from './components/layout/Footer';
import "./assets/style/global/variables.css";
import GlobalClients from './components/sections/GlobalClients';
import ClientReview from './components/sections/ClientReview';
import Testimonials from './components/sections/Testimonials';

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
     <ClientReview/>
     <Testimonials/>
     <SubHero/>
     <PressRelease/>
     <ContactUs/>
     <GlobalClients/>
     <Footer/>
    </div>
  );
}

export default App;
