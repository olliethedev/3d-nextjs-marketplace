import React from "react";
import { selectCartState } from "@/store/cartSlice";
import { CartProduct } from "@/types";
import Image from "next/image";
import { useSelector } from "react-redux";
import { AddToCartSection } from "./AddToCartSection";

/*
 *  This component is used in the Cart page.
 */

const CartList = () => {
  const cartState = useSelector(selectCartState);

  return (
    <div className="flex flex-col space-y-2">
      {cartState.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      {cartState.length === 0 && (
        <p className="body">Your cart is empty. Add some products!</p>
      )}
    </div>
  );
};

const CartItem = ({ product }: { product: CartProduct }) => {
  return (
    <div className="flex card-body">
      <Image
        className="rounded"
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
      />
      <div className="grow">
        <h3 className="title-sm">Product:</h3>
        <h1 className="title-lg">{product.name}</h1>
      </div>
      <div>
        <h3 className="title-sm">Price:</h3>
        <p className="body">${product.price}</p>
        <AddToCartSection cartMode product={product} />
      </div>
    </div>
  );
};

export default CartList;
