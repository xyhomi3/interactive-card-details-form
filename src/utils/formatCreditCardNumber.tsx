////////////////////////////////////////////////
const formatCreditCardNumber = (number: string) => {
    // Format the card number as **** **** **** ****
    return number.replace(/(\d{4})/g, '$1 ');
  };
  ////////////////////////////////
  export default formatCreditCardNumber;
  ////////////////////////////////