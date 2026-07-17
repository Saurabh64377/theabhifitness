import { useState } from "react";
import { TrialModalContext } from "./hooks/useTrialModal";
import { PlanSelectionContext } from "./hooks/usePlanSelection";

import PageLoader from "./components/PageLoader";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import BookTrialModal from "./components/BookTrialModal";

import Hero from "./sections/Hero";
import About from "./sections/About";
import WhyChooseUs from "./sections/WhyChooseUs";
import Services from "./sections/Services";
import HealthTools from "./sections/HealthTools";
import Trainers from "./sections/Trainers";
import CounterSection from "./sections/CounterSection";
import MembershipPlans from "./sections/MembershipPlans";
import Gallery from "./sections/Gallery";
import Transformations from "./sections/Transformations";
import Faq from "./sections/Faq";
import LocationMap from "./sections/LocationMap";
import InstagramFeed from "./sections/InstagramFeed";
import Contact from "./sections/Contact";

function App() {
  const [trialOpen, setTrialOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <TrialModalContext.Provider value={{ open: () => setTrialOpen(true), close: () => setTrialOpen(false) }}>
      <PlanSelectionContext.Provider value={{ selectedPlan, selectPlan: setSelectedPlan }}>
        <PageLoader />
        <ScrollProgress />
        <Navbar />

        <main className="relative">
          <Hero />
          <About />
          <WhyChooseUs />
          <Services />
          <HealthTools />
          <Trainers />
          <CounterSection />
          <MembershipPlans />
          <Gallery />
          <Transformations />
          <Faq />
          <LocationMap />
          <InstagramFeed />
          <Contact />
        </main>

        <Footer />
        <FloatingButtons />
        <BookTrialModal open={trialOpen} onClose={() => setTrialOpen(false)} />
      </PlanSelectionContext.Provider>
    </TrialModalContext.Provider>
  );
}

export default App;
