import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Ilk6kCC9TEjdit8TxkNyOqgxJnBU34jOQiXJF5KLi8apEsTwptref5cgOSqSC8o1NZdkBXbi7t2dg2pRdR7rWKt00qZl6dMGz";

  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      billingAddress
      shippingAddress
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
