import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'

// Define a type for the slice state
interface DataState {
  data: {} | null;
}

// Define the initial state using that type
const initialState: DataState = {
  data: null,
}

export const dataSlice = createSlice({
  name: 'data',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{}>) => {
      state.data = action.payload
    },
  },
})

export const { setData } = dataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.data.data

export default dataSlice.reducer