import { addToCart, selectCartState } from "@/store/cartSlice";
import { Product } from "@/types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface AddToCartSectionProps {
  product: Product;
  cartMode?: boolean;
}

export const AddToCartSection = ({
  product,
  cartMode,
}: AddToCartSectionProps) => {
  const dispatch = useDispatch();

  const cartState = useSelector(selectCartState);

  const [quantity, setQuantity] = React.useState(
    cartState.find((p) => p.id === product.id)?.quantity || 1
  );

  const onAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    alert(cartMode ? "Updated" : "Added to cart");
  };
  return (
    <div className="flex space-x-3 items-center">
      <div className="flex space-x-3 shrink">
        <div className="form-control">
          <h3 className="form-label">Quantity:</h3>
          <input
            className="form-input text-lg p-1"
            type="number"
            min={cartMode ? 0 : 1}
            max={100}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>
      </div>
      <button className="btn-primary h-14" onClick={onAddToCart}>
        {cartMode ? "Update" : "Add to cart"}
      </button>
    </div>
  );
};
