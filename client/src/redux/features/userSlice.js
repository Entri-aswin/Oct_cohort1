import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserAuth: true,
    userData: {},
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUserData: (state, action) => {
            (state.isUserAuth = true), (state.userData = action.payload);
        },
        clearUserData: (state) => {
            (state.isUserAuth = false), (state.userData = {});
        },
    },
});

// Action creators are generated for each case reducer function
export const { saveUserData,clearUserData } = userSlice.actions;

export default userSlice.reducer;
