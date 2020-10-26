import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

/* Account Keys:

    email: nevas71510@prekab.net
    password: 71510_Prekab_01517 */

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HgImyEXt6fVIxkjdOdSLzNpVCNg5JQxhhJjLgkFqiEDJFhblP4VoZe7qsUk1xubw3WlApILoFKfF76npEL8wqOc00ZEAFuhYA';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CROWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
