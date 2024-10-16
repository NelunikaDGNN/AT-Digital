import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Services from './pages/MiddleSection/Services';
import Faqs from './components/Faqs/Faqs';
import HeroSection from './pages/HeroSection/HeroSection';
import Section from './pages/SectionTwo/SectionTwo';




const App = () => {

  return (
    <div>
     <Navbar /> 
     <HeroSection/>

    
     <Services/>
     <Section />

      
      <Faqs />
     <Footer />   
    </div>
  );
};

export default App;
