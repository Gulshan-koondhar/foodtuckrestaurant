import React, { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";
const CartProviders = ({ children }: { children: ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe=""
      successUrl=""
      cancelUrl=""
      shouldPersist={false}
      currency="USD"
      billingAddressCollection={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
};

export default CartProviders;
