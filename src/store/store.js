// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./Feature/user-slice";
import vehicleReducer from "./Feature/vehicle-slice";
import driverReducer from "./Feature/driver-slice";
import personReducer from "./Feature/person-slice";
import requestDataSlice from "./Feature/request-data-slice";
import claimServicesReducer from "./Feature/claim-services";
import selectedItemsReducer from "./Feature/selected-items";
import myRequestReducer from "./Feature/my-request";

const userPersistConfig = {
  key: "user",
  storage,
};
const vehiclePersistConfig = {
  key: "vehicle",
  storage,
};
const driverPersistConfig = {
  key: "driver",
  storage,
};
const personPersistConfig = {
  key: "driver",
  storage,
};
const requestDataPersistConfig = {
  key: "requestData",
  storage,
};
const claimServicesPersistConfig = {
  key: "claimServices",
  storage,
};
const myRequestPersistConfig = {
  key: "myRequests",
  storage,
};

const userPersistedReducer = persistReducer(userPersistConfig, userReducer);
const vehiclePersistedReducer = persistReducer(vehiclePersistConfig, vehicleReducer);
const driverPersistedReducer = persistReducer(driverPersistConfig, driverReducer);
const personPersistedReducer = persistReducer(personPersistConfig, personReducer);
const requestDataPersistedReducer = persistReducer(requestDataPersistConfig, requestDataSlice);
const claimServicePersistedReducer = persistReducer(claimServicesPersistConfig, claimServicesReducer);
const myRequestPersistedReducer = persistReducer(myRequestPersistConfig, myRequestReducer);

export const store = configureStore({
  reducer: {
    user: userPersistedReducer,
    vehicle: vehiclePersistedReducer,
    driver: driverPersistedReducer,
    person: personPersistedReducer,
    requestData: requestDataPersistedReducer,
    claimServices: claimServicePersistedReducer,
    selectedItems: selectedItemsReducer,
    myRequests: myRequestPersistedReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist to handle non-serializable actions
    }),
});

export const persistor = persistStore(store);
