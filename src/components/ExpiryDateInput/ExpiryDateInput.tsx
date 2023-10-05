import React from "react";
////////////////////////////////
interface ExpiryDateInputProps {
  month: string;
  year: string;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
  isError?: boolean;
}
////////////////////////////////
const ExpiryDateInput: React.FC<ExpiryDateInputProps> = ({
  month,
  year,
  onMonthChange,
  onYearChange,
  isError,
}) => {
  return (
    <div className="form-group" style={{ display: "grid" }}>
      <label htmlFor="expiryDate">
        Exp. Date (MM/YY)
      </label>

      <div className="expiry-date-inputs">
        <input
          type="text"
          placeholder="MM"
          value={month}
          onChange={(e) => onMonthChange(e.target.value)}
          maxLength={2}
          className={isError ? 'error-input' : ''}
        />
        <span style={{ padding: "5px" }} />
        <input
          type="text"
          placeholder="YY"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          maxLength={2}
          className={isError ? 'error-input' : ''}
        />
      </div>
      {isError && <span className="required">Can't be blank</span>}
    </div>
  );
};
////////////////////////////////
export default ExpiryDateInput;
////////////////////////////////