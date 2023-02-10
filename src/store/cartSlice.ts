import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { CartProduct } from "@/types";

export interface CartState {
    cartState: CartProduct[];
}

const initialState: CartState = {
    cartState: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        setCartState(state, action) {
            state.cartState = action.payload;
        },
        addToCart(state, action) {

            const newProduct = action.payload;
            console.log({
                newProduct: newProduct.id,
                quantity: newProduct.quantity
            })
            const existingProduct = state.cartState.find(
                (product) => product.id === newProduct.id
            );
            console.log({
                existingProduct: existingProduct?.id,
                quantity: existingProduct?.quantity
            })
            if (existingProduct) {
                if (newProduct.quantity <= 0) {
                    state.cartState = state.cartState.filter(
                        (product) => product.id !== newProduct.id
                    );
                } else {

                    existingProduct.quantity = newProduct.quantity;

                }
            } else {
                state.cartState.push(newProduct);
            }
        },

    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.cart,
            };
        },
    },
});

export const { setCartState, addToCart } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cartState;

export default cartSlice.reducer;