import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
//import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import BlogSection from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <CallToAction />
      <Overview />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
