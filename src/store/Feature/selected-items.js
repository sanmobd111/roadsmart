import { createSlice } from "@reduxjs/toolkit";

export const claimServicesSlice = createSlice({
    name: "claimServices",
    initialState: {
        selectedCarForParts: {}
    },
    reducers: {
        setSelectedCarForParts(state, action) {
            state.selectedCarForParts = action.payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { setSelectedCarForParts } = claimServicesSlice.actions;

export default claimServicesSlice.reducer;