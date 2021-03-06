import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.style.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IRdVTKILFNXBNL58G1mk7pG55aV0NZeq0D45xDS7rN78gyLmNrYh1ymRce07pdfIAQPpeTrGsq9axkT8z5Q56EF00HZVDyCvY";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
