import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Feedbacks from "../components/Feedbacks/Feedbacks";
import GallerySection from "../components/ImageSection/GallerySection";

export default function Home() {
  return (
    <>
      <Header />
      <GallerySection />
      <Feedbacks />
      <Footer />
    </>
  );
}
