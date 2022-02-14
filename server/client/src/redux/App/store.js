import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { myapis } from "../services/myservice";


export const store = configureStore({
    reducer: {
        [myapis.reducerPath]: myapis.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myapis.middleware),
});

setupListeners(store.dispatch)