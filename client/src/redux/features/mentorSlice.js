import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMentorAuth: false,
    mentorData: {},
};

export const mentorSlice = createSlice({
    name: "mentor",
    initialState,
    reducers: {
        saveMentorData: (state, action) => {
            (state.isMentorAuth = true), (state.mentorData = action.payload);
        },
        clearMentorData: (state) => {
            (state.isMentorAuth = false), (state.mentorData = {});
        },
    },
});

// Action creators are generated for each case reducer function
export const { saveMentorData,clearMentorData } = mentorSlice.actions;

export default mentorSlice.reducer;
