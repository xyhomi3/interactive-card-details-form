import React from "react";
import "./CardDisplay.css";
import cardFG from "../../assets/bg-card-front.png";
import cardBG from "../../assets/bg-card-back.png";
import logo from "../../assets/card-logo.svg";
import formatCreditCardNumber from "../../utils/formatCreditCardNumber";
////////////////////////////////
interface CardDisplayProps {
  cardHolderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}
///////////////////////////////
const CardDisplay: React.FC<CardDisplayProps> = ({
  cardHolderName,
  cardNumber,
  expiryMonth,
  expiryYear,
  cvc,
}) => {
  ///// Format the card number using the formatCreditCardNumber function
  const formattedCardNumber = formatCreditCardNumber(cardNumber);

  return (
    <div className="card-display" style={{ zIndex: "100" }}>
      <div className="credit-card">
        <img src={logo} alt="card-icon" className="card-logo" />
        <img src={cardBG} alt="Card" className="card-bg" />
        <img src={cardFG} alt="Card" className="card-fg" />

        <div className="card-number">{formattedCardNumber}</div>
        <div className="cardholder-name">{cardHolderName}</div>

        <div className="cvc">{cvc}</div>
        <div className="expiry-date">{`${expiryMonth}/${expiryYear}`}</div>
      </div>
    </div>
  );
};
////////////////////////////////
export default CardDisplay;
////////////////////////////////