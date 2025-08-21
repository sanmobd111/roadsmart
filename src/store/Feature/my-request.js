import { createSlice } from "@reduxjs/toolkit";

export const requestSlice = createSlice({
    name: "my-request",
    initialState: {
        myRequests: []
    },
    reducers: {
        addRequest: (state, action) => {
            state.myRequests = [...state.myRequests, action.payload];
        },
    },
});

// Action creators are generated for each case reducer function
export const { addRequest } = requestSlice.actions;

export default requestSlice.reducer;