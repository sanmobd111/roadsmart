import { createSlice } from "@reduxjs/toolkit";

export const claimServicesSlice = createSlice({
    name: "claimServices",
    initialState: {
        claimServices: {
            incident: [],
            damage: [],
            insurance: [],
            license: [],
            natureOfAccident: [],
        },
    },
    reducers: {
        setIncident(state, action) {
            state.claimServices.incident = [...state.claimServices.incident, ...action.payload];
        },
        setSelectedIncident(state, action) {
            state.claimServices.incident.find((incident) => incident.id === action.payload.id).selected = !state.claimServices.incident.find((incident) => incident.id === action.payload.id).selected;
        },
        setDamage(state, action) {
            state.claimServices.damage = [...state.claimServices.damage, ...action.payload];
        },
        updateDamage(state, action) {
            state.claimServices.damage = state.claimServices.damage.map((damage) => {
                if (damage.id === action.payload.id) {
                    return {
                        ...damage,
                        ...action.payload,
                    };
                }
                return damage;
            });
        },
        setInsurance(state, action) {
            state.claimServices.insurance = [...state.claimServices.insurance, ...action.payload];
        },
        updateInsurance(state, action) {
            state.claimServices.insurance = state.claimServices.insurance.map((insurance) => {
                console.log(insurance.id, action.payload)
                if (insurance.id === action.payload.id) {
                    return {
                        ...insurance,
                        ...action.payload,
                    };
                }
                return insurance;
            });
        },
        setLicense(state, action) {
            state.claimServices.license = [...state.claimServices.license, ...action.payload];
        },
        updateLicense(state, action) {
            state.claimServices.license = state.claimServices.license.map((license) => {
                if (license.id === action.payload.id) {
                    return {
                        ...license,
                        ...action.payload,
                    };
                }
                return license;
            });
        },
        setNatureOfAccident(state, action) {
            state.claimServices.natureOfAccident = [...state.claimServices.natureOfAccident, ...action.payload];
        },
        updateNatureOfAccident(state, action) {
            state.claimServices.natureOfAccident = state.claimServices.natureOfAccident.map((natureOfAccident) => {
                if (natureOfAccident.id === action.payload.id) {
                    return {
                        ...natureOfAccident,
                        ...action.payload,
                    };
                }
                return natureOfAccident;
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const { setIncident, setSelectedIncident, setDamage, updateDamage, setInsurance, updateInsurance, setLicense, updateLicense, setNatureOfAccident, updateNatureOfAccident } = claimServicesSlice.actions;

export default claimServicesSlice.reducer;