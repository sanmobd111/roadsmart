import { createSlice } from "@reduxjs/toolkit";

export const driverSlice = createSlice({
    name: "driver",
    initialState: {
        drivers: []
    },
    reducers: {
        addDriver: (state, action) => {
            // state.push(action.payload);
            state.drivers.push(action.payload);
        },

        selectDriver: (state, action) => {
            console.log(action)
            state?.drivers?.forEach((driver) => {
                console.log(action?.payload?.id)
                if (driver.id === action.payload?.id) {
                    driver.selected = !driver.selected;
                }
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { addDriver, selectDriver } = driverSlice.actions;

export default driverSlice.reducer;