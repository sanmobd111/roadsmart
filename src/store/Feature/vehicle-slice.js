import { createSlice } from "@reduxjs/toolkit";

export const vehicleSlice = createSlice({
    name: "vehicle",
    initialState: {
        vehicles: []
    },
    reducers: {
        addVehicle: (state, action) => {
            state.vehicles.push(action.payload);
        },

        selectVehicle: (state, action) => {
            state?.vehicles?.forEach((vehicle) => {
                if (vehicle.id === action.payload?.id) {
                    vehicle.selected = !vehicle.selected;
                }
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { addVehicle, selectVehicle } = vehicleSlice.actions;

export default vehicleSlice.reducer;