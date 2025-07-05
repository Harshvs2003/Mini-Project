import { useState } from "react";
import Header from "./components/Header";
import HomeKitchen from "./components/HomeKitchen";
import PopularItems from "./components/PopularItems";
import VideoSection from "./components/VideoSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <Header />
      <HomeKitchen />
      <PopularItems openModal={openModal} />
      <VideoSection />
      <ContactForm />
      <Footer />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default App;
