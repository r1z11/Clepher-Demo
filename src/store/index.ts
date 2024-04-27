import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './reducers/Data'
import { alphaVantageApi } from '../services/AlphaVantage'

export const store = configureStore({
    reducer: {
        data: dataReducer,
        // Add the generated reducer as a specific top-level slice
        [alphaVantageApi.reducerPath]: alphaVantageApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(alphaVantageApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch