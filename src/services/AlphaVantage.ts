// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Data } from '../types'
import { baseUrl } from '../constants/API'

const apiKey = process.env.REACT_APP_API_KEY

// Define a service using a base URL and expected endpoints
export const alphaVantageApi = createApi({
    reducerPath: 'alphaVantageApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getNews: builder.query<Data, void>({
            query: () => `query?function=NEWS_SENTIMENT&apikey=` + apiKey,
        }),
        getTopics: builder.query<Data, string>({
            query: (topics) => `query?function=NEWS_SENTIMENT&topics=${topics}&apikey=` + apiKey,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetNewsQuery,
    useGetTopicsQuery
} = alphaVantageApi