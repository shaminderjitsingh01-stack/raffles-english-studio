import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Packages from "@/components/Packages";
import TikTokCarousel from "@/components/TikTokCarousel";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Packages />
      <TikTokCarousel />
      <Testimonials />
      <Blog />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
