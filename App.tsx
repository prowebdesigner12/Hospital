
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoCardsSection from './components/InfoCardsSection';
import NewAboutSection from './components/NewAboutSection';
import HealthcareStandardsSection from './components/HealthcareStandardsSection';
import SpecialtiesAndProcedures from './components/SpecialtiesAndProcedures';
import FacilitiesSection from './components/FacilitiesSection';
import AwardsSection from './components/AwardsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import CareersSection from './components/CareersSection';
import Footer from './components/Footer';
import FloatingActionButtons from './components/FloatingActionButtons';
import HowItWorksSection from './components/HowItWorksSection';
import CtaSection from './components/CtaSection';
import ProcessSection from './components/ProcessSection';
import BackToTopButton from './components/BackToTopButton';
import ServicesSection from './components/ServicesSection';
import ChampionsSection from './components/ChampionsSection';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <InfoCardsSection />
        <NewAboutSection />
        <HealthcareStandardsSection />
        <SpecialtiesAndProcedures />
        <ServicesSection />
        <ChampionsSection />
        <ProcessSection />
        <FacilitiesSection />
        <HowItWorksSection />
        <AwardsSection />
        <TestimonialsSection />
        <CtaSection />
        <FaqSection />
        <CareersSection />
      </main>
      <Footer />
      <FloatingActionButtons />
      <BackToTopButton />
    </div>
  );
};

export default App;
