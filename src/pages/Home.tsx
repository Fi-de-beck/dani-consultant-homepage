import Feedbacks from "../components/Feedbacks/Feedbacks";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Card from "../components/Section/Card";
import Hero from "../components/Hero/Hero";
import GallerySection from "../components/ImageSection/GallerySection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <GallerySection />
      <Card />
      <Feedbacks />
      <Footer />
    </>
  );
}
