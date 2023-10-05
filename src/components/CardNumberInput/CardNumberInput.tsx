import React from "react";
////////////////////////////////
interface CardNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  isError?: boolean;
}
////////////////////////////////
const CardNumberInput: React.FC<CardNumberInputProps> = ({
  value,
  onChange,
  isError,
}) => {
  return (
    <div
      className={`form-group ${isError ? "error" : ""}`}
      style={{ display: "grid" }}
    >
      <label htmlFor="cardNumber">
        Card Number
      </label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. 1234 5678 9123 0000"
        maxLength={16}
        className={isError ? "error-input" : ""}
      />
      {isError && (
        <span className="required">
          {/^\d+$/.test(value) ? " " : "Wrong format, numbers only"}
        </span>
      )}
    </div>
  );
};
////////////////////////////////
export default CardNumberInput;
////////////////////////////////