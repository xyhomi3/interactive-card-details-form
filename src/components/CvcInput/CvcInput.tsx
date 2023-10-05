import React from 'react';
////////////////////////////////
interface CvcInputProps {
  value: string;
  onChange: (value: string) => void;
  isError?: boolean;
}
////////////////////////////////
const CvcInput: React.FC<CvcInputProps> = ({ value, onChange, isError }) => {
  return (
    <div className={`form-group ${isError ? 'error' : ''}`} style={{ display: 'grid' }}>
      <label htmlFor="cvc">
        CVC
      </label>
      <input
        type="text"
        id="cvc"
        name="cvc"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g. 123"
        maxLength={3}
        className={isError ? 'error-input' : ''}
      />
      {isError && <span className="required">Can't be blank</span>}
    </div>
  );
};
////////////////////////////////
export default CvcInput;
////////////////////////////////