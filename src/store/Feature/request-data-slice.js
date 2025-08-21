import { createSlice } from "@reduxjs/toolkit";

export const requestDataSlice = createSlice({
    name: "requestData",
    initialState: {
        requestData: {
            finance: {},
            transport: {},
            insurance: {},
        },
    },
    reducers: {
        setRequestData: (state, action) => {
            state.requestData = { ...state.requestData, ...action.payload }
        },

    },
});

// Action creators are generated for each case reducer function
export const { setRequestData } = requestDataSlice.actions;

export default requestDataSlice.reducer;