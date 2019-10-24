import React from "react";

import { useQuery, useMutation } from "@apollo/react-hooks";

import CartIcon from "./cart-icon.component";

import {
  TOGGLE_CART_HIDDEN,
  GET_ITEM_COUNT,
  // REFRESH
} from "../../graphql/cart.queries";

const CartIconContainer = () => {
  const { data } = useQuery(GET_ITEM_COUNT);
  const { itemCount } = data;
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);
  /* const [refresh] = useMutation(REFRESH);

  useEffect(() => {
    refresh();
  }, [refresh]); */

  return <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />;
};

export default CartIconContainer;
