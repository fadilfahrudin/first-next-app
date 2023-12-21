import { configureStore } from "@reduxjs/toolkit"
import { productsApi } from "./reducer/products-slice"
import { unsplashApi } from "./reducer/unsplash-slice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            [productsApi.reducerPath]: productsApi.reducer,
            [unsplashApi.reducerPath]: unsplashApi.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware).concat(unsplashApi.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>

export type RouterState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']