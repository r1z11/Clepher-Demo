import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../index'
import { Data } from '../../types';

// Define a type for the slice state
interface DataState {
    data: Data | null;
    loading: boolean;
}

// Define the initial state using that type
const initialState: DataState = {
    data: null,
    loading: false
}

export const dataSlice = createSlice({
    name: 'data',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Data>) => {
            state.data = action.payload
            state.loading = false
        },
        setStatus: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload
        },
    },
})

export const { setData, setStatus } = dataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.data.data

export default dataSlice.reducer