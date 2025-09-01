import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Overview />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
