import React from "react";

import { selectCartState } from "@/store/cartSlice";
import { useSelector } from "react-redux";

/*
 *   This component is used in the Navbar.
 */

const CartBadge = () => {
  const cartState = useSelector(selectCartState);

  const total = cartState.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  return (
    <div>
      {"("}
      {total}
      {")"}
    </div>
  );
};

export default CartBadge;
