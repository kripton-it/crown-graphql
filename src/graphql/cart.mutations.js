import {
  GET_CART_HIDDEN,
  GET_CART_ITEMS,
  GET_ITEM_COUNT,
  GET_CART_TOTAL
} from "./cart.queries";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  getCartItemsCount,
  getCartTotal
} from "./cart.utils";

// helpers
/* const resetCardItemsAndItemCount = (cache) => {
  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: {
      cartItems: []
    }
  });

  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: {
      itemCount: 0
    }
  });

  cache.writeQuery({
    query: GET_CART_TOTAL,
    data: {
      total: 0
    }
  });
}; */

const setCardItemsAndItemCount = (cache, cartItems) => {
  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: {
      cartItems
    }
  });

  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: {
      itemCount: getCartItemsCount(cartItems)
    }
  });

  cache.writeQuery({
    query: GET_CART_TOTAL,
    data: {
      total: getCartTotal(cartItems)
    }
  });
};

const updateCartItems = (cache, item, cb) => {
  const { cartItems } = cache.readQuery({
    query: GET_CART_ITEMS
  });
  const newCartItems = cb(cartItems, item);

  setCardItemsAndItemCount(cache, newCartItems);

  return newCartItems;
};

// mutations
const toggleCartHidden = (_root, _args, _context, _info) => {
  const { cache } = _context;
  const { isCartHidden } = cache.readQuery({
    query: GET_CART_HIDDEN
  });
  cache.writeQuery({
    query: GET_CART_HIDDEN,
    data: {
      isCartHidden: !isCartHidden
    }
  });
  return !isCartHidden;
};

const addItem = (_root, { item }, { cache }, _info) =>
  updateCartItems(cache, item, addItemToCart);

const removeItem = (_root, { item }, { cache }, _info) =>
  updateCartItems(cache, item, removeItemFromCart);

const clearItem = (_root, { item }, { cache }, _info) =>
  updateCartItems(cache, item, clearItemFromCart);

/* const refresh = (_root, _args, { cache }, _info) => {
  const { cartItems } = cache.readQuery({
    query: GET_CART_ITEMS
  });

  console.log(cartItems);

  resetCardItemsAndItemCount(cache);

  setCardItemsAndItemCount(cache, cartItems);

  return cartItems;
}; */

export default {
  toggleCartHidden,
  addItemToCart: addItem,
  removeItemFromCart: removeItem,
  clearItemFromCart: clearItem,
  // refresh
};
