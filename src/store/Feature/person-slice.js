import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
    name: "person",
    initialState: {
        persons: []
    },
    reducers: {
        addPerson: (state, action) => {
            // state.push(action.payload);
            state.persons.push(action.payload);
        },

        selectPerson: (state, action) => {
            console.log(action)
            state?.persons?.forEach((person) => {
                console.log(action?.payload?.id)
                if (person.id === action.payload?.id) {
                    person.selected = !person.selected;
                }
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { addPerson, selectPerson } = personSlice.actions;

export default personSlice.reducer;