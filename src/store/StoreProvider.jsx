"use client";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/lib/integration/react";
// import { makeStore } from "./store";

export default function StoreProvider({ children }) {
  // const storeRef = useRef(null);
  // if (!storeRef.current) {
  //   // Create the store instance the first time this renders
  //   storeRef.current = makeStore();
  // }

  return <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>;
}
