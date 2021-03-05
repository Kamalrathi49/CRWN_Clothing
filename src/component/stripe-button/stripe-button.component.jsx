import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.style.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51IRdVTKILFNXBNL58G1mk7pG55aV0NZeq0D45xDS7rN78gyLmNrYh1ymRce07pdfIAQPpeTrGsq9axkT8z5Q56EF00HZVDyCvY";
};
