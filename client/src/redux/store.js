import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import mentorReducer from "./features/mentorSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        mentor: mentorReducer,
    },
});
