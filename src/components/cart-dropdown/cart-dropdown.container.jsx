import React from "react";
import { Query, Mutation } from "react-apollo";

import CartDropdown from "./cart-dropdown.component";

import { GET_CART_ITEMS, TOGGLE_CART_HIDDEN } from "../../graphql/cart.queries";

const CartDropdownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {toggleCartHidden => (
      <Query query={GET_CART_ITEMS}>
        {({ data }) => (
          <CartDropdown
            cartItems={data.cartItems}
            toggleCartHidden={toggleCartHidden}
          />
        )}
      </Query>
    )}
  </Mutation>
);

export default CartDropdownContainer;
