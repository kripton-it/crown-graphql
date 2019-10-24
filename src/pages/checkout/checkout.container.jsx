import React from "react";

import CheckoutPage from "./checkout.component";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_PROPS = gql`
  {
    cartItems @client
    total @client
  }
`;

const CheckoutPageContainer = () => {
  const { data } = useQuery(GET_PROPS);
  const { cartItems, total } = data;
  return <CheckoutPage cartItems={cartItems} total={total} />;
};

export default CheckoutPageContainer;
