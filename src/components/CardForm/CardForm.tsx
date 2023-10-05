import React, { useState } from "react";
import CardHolderNameInput from "@components/CardHolderNameInput/CardHolderNameInput";
import CardNumberInput from "@components/CardNumberInput/CardNumberInput";
import ExpiryDateInput from "@components/ExpiryDateInput/ExpiryDateInput";
import CvcInput from "@components/CvcInput/CvcInput";
import CheckmarkIcon from "@assets/icon-complete.svg";
import "./CardForm.css";
////////////////////////////////
export interface CardDetails {
  cardHolderName: string;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
}
interface CardFormProps {
  onCardDetailsChange: (updatedCard: CardDetails) => void;
  initialCardDetails: CardDetails;
}
////////////////////////////////
const CardForm: React.FC<CardFormProps> = ({
  onCardDetailsChange,
  initialCardDetails,
}) => {
  const [card, setCard] = useState<CardDetails>(initialCardDetails);

  ///// State to track form submission
  const [formSubmitted, setFormSubmitted] = useState(false);

  ///// State for error messages
  const [errors, setErrors] = useState<boolean[]>([false, false, false, false]);

  const validateForm = () => {
    const newErrors: boolean[] = [];

    ///// Validation logic for each field
    if (!card.cardHolderName.trim()) {
      newErrors[0] = true; // Set error for Cardholder Name
    }

    if (!card.cardNumber.trim() || !/^\d+$/.test(card.cardNumber)) {
      newErrors[1] = true; // Set error for Card Number (non-numeric characters)
    } else if (card.cardNumber.length !== 16) {
      newErrors[4] = true; // Set error for Card Number (incorrect length)
    }

    if (!card.expiryMonth.trim() || !card.expiryYear.trim()) {
      newErrors[2] = true; // Set error for Expiry Date
    }

    if (!card.cvc.trim()) {
      newErrors[3] = true; // Set error for CVC
    }

    setErrors(newErrors);
    return newErrors.every((error) => !error); // Return true if no errors
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    ///// Validate the form
    if (validateForm()) {
      ///// Handle successful form submission with the card data here
      console.log(card);
      setFormSubmitted(true);
    }
  };

  ///// Function to update card details when inputs change
  const handleCardInputChange = (fieldName: string, value: string) => {
    setCard((prevCard) => ({ ...prevCard, [fieldName]: value }));
    onCardDetailsChange({ ...card, [fieldName]: value });
  };

  ///// Reload the page when the "Continue" button is clicked
  const handleContinueClick = () => {
    window.location.reload();
  };

  return (
    <div>
      {formSubmitted ? (
        <div className="success-message">
          <img
            src={CheckmarkIcon}
            alt="Checkmark"
            style={{ width: "50px", height: "50px" }}
          />
          <h1
            style={{
              textTransform: "uppercase",
              color: "var(--Very-dark-violet)",
            }}
          >
            Thank You!
          </h1>
          <p>We've added your card details</p>
          <button onClick={handleContinueClick} type="button">
            Continue
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <CardHolderNameInput
            value={card.cardHolderName}
            onChange={(value) => handleCardInputChange("cardHolderName", value)}
            isError={errors[0]}
          />

          <CardNumberInput
            value={card.cardNumber}
            onChange={(value) => handleCardInputChange("cardNumber", value)}
            isError={errors[1]}
          />

          <div className="expiry-cvc-container">
            <ExpiryDateInput
              month={card.expiryMonth}
              year={card.expiryYear}
              onMonthChange={(value) =>
                handleCardInputChange("expiryMonth", value)
              }
              onYearChange={(value) =>
                handleCardInputChange("expiryYear", value)
              }
              isError={errors[2]}
            />

            <CvcInput
              value={card.cvc}
              onChange={(value) => handleCardInputChange("cvc", value)}
              isError={errors[3]}
            />
          </div>
          <span style={{ display: "block", padding: "0.3em" }}></span>
          <button type="submit">Confirm</button>
          <div className="attribution">
            Challenge by<span> </span>
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </a>
            <span> </span>Coded by<span> </span><a href="https://xyhomi3.github.io/">XYHOMi3</a>.
          </div>
        </form>
      )}
    </div>
  );
};
////////////////////////////////
export default CardForm;
////////////////////////////////