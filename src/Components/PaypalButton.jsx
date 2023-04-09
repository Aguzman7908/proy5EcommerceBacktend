import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const PPK = 'AVGfTgSGBpvqOSXd2wdsIJeyupxnf5vYZPLpIcCu0Qx1blvh0CN5ezY07GBWYsLD-rPHQFmrI3eKqTlH'

function PaypalButton({ value }) {
  return (
    <PayPalScriptProvider options={{ 'client-id': PPK }}>
      <PayPalButtons
        style={{ layout: 'horizontal' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: value,
                },
              },
            ],
          })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name
            alert(`Transaction completed by ${name}`)
          })
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PaypalButton
