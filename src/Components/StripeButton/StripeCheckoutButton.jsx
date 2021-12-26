import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51KAsPOSBA6BrJnpmEWlsmSNRHihBdU4dMiXbADuGAzH7otvWxCQxeF0xsusY5CBSkaa1eJOvb4IkJjHEL8uTS3HU0012LjUNqC'

  const onToken = (token) => {
    console.log(token)
    alert('Payment Succesful!')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Active Clothing pvt. Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
      bitcoin
    />
  )
}

export default StripeCheckoutButton
