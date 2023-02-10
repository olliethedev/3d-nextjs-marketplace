import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartReducer, { cartSlice } from "./cartSlice";
import { createWrapper } from "next-redux-wrapper";
import { loadState } from "./localStorage";
import accountReducer, { accountSlice } from "./accountSlice";

const makeStore = () =>
    configureStore({
        reducer: {
            [accountSlice.name]: accountReducer,
            [cartSlice.name]: cartReducer,
        },
        preloadedState: loadState(),
        devTools: true,
    })

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);

