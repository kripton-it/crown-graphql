import React from "react";
import { graphql } from "react-apollo";
import { flowRight } from "lodash";

import Header from "./header.component";

import { GET_CART_HIDDEN } from "../../graphql/cart.queries";
import { GET_CURRENT_USER } from "../../graphql/user.queries";

const HeaderContainer = ({ hiddenData, currentUserData }) => (
  <Header
    hidden={hiddenData.isCartHidden}
    currentUser={currentUserData.currentUser}
  />
);

export default flowRight(
  graphql(GET_CART_HIDDEN, { name: "hiddenData" }),
  graphql(GET_CURRENT_USER, { name: "currentUserData" })
)(HeaderContainer);
