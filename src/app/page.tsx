"use client"

import { Popup } from "@/components/molecules/popup";
import { HeroSection } from "@/components/pages/HeroSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <main>
      <HeroSection />
      <Popup show={showPopup} onClose={handleClosePopup} />
    </main>
  );
}
