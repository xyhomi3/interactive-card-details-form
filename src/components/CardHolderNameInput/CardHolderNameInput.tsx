import React from 'react';
////////////////////////////////
interface CardHolderNameInputProps {
  value: string;
  onChange: (value: string) => void;
  isError?: boolean;
}
////////////////////////////////
const CardHolderNameInput: React.FC<CardHolderNameInputProps> = ({ value, onChange, isError }) => {
  return (
    <div className={`form-group ${isError ? 'error' : ''}`} style={{ display: 'grid' }}>
      <label htmlFor="cardHolderName">
        Cardholder Name
      </label>
      <input
        type="text"
        id="cardHolderName"
        name="cardHolderName"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. Jane Appleseed"
        className={isError ? 'error-input' : ''}
      />
      {isError && <span className="required">Can't be blank</span>}
    </div>
  );
};
////////////////////////////////
export default CardHolderNameInput;
////////////////////////////////