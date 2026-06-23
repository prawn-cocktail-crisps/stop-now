// v2
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Guarantee from "@/components/Guarantee";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav /> 
      <main>
        <Hero />
        <Method />
        <Guarantee />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
