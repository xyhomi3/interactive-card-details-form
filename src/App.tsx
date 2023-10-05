import desktopBg from "@assets/bg-main-desktop.png";
import mobileBg from "@assets/bg-main-mobile.png";
import React, { useState, useEffect } from "react";
import "./App.css";
import CardForm from "@components/CardForm/CardForm";
import CardDisplay from "@components/CardDisplay/CardDisplay";
import { CardDetails } from "@components/CardForm/CardForm"; // Replace './CardForm' with the correct path to your CardForm file
////////////////////////////////
const App: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState(desktopBg);
  const [card, setCard] = useState<CardDetails>({
    cardHolderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });
  ////////////////////////////////
  useEffect(() => {
    const updateBackgroundImage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1390) {
        setBackgroundImage(mobileBg);
      } else {
        setBackgroundImage(desktopBg);
      }
    };

    updateBackgroundImage();
    window.addEventListener("resize", updateBackgroundImage);
    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []);
  /////////Callback function to handle card details change//////
  const handleCardDetailsChange = (updatedCard: CardDetails) => {
    setCard(updatedCard);
  };
  ////////////////////////////////
  return (
    <>
      <div className="grid-container">
        <div className="left-column">
          <div className="image-container">
            <img className="bg" src={backgroundImage} alt="" />
            <CardDisplay {...card} />
          </div>
        </div>
        <div className="right-column">
          <CardForm
            onCardDetailsChange={handleCardDetailsChange}
            initialCardDetails={card}
          />
        </div>
      </div>
    </>
  );
};
////////////////////////////////
export default App;
////////////////////////////////