import React from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RevenueGeneration from './components/RevenueGeneration';
import Services from './components/Services';
import TargetAudience from './components/TargetAudience';
import UniqueQualities from './components/UniqueQualities';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <UniqueQualities />
      <RevenueGeneration />
      <TargetAudience />
      <Footer />
    </div>
  );
}

export default App;
