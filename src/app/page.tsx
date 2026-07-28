import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Calculator from "@/components/Calculator";
import Catalog from "@/components/Catalog";
import Advantages from "@/components/Advantages";
import Portfolio from "@/components/Portfolio";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Calculator />
        <Catalog />
        <Advantages />
        <Portfolio />
        <Steps />
      </main>
      <Footer />
    </>
  );
}
