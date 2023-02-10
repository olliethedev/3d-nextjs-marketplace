import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { Account } from "@/types";

export interface AccountState {
    accountState: Account;
}

const initialState: AccountState = {
    accountState:
    {
        firstName: "",
        lastName: "",
        email: "",
        billingStatus: "",
        profileImage: ""
    }

};

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {

        setAccountState(state, action) {
            state.accountState = action.payload;
        },


    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.account,
            };
        },
    },
});

export const { setAccountState } = accountSlice.actions;

export const selectAccountState = (state: AppState) => state.account.accountState;

export default accountSlice.reducer;