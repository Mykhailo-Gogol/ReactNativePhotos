import { createSlice } from '@reduxjs/toolkit'

const loadingSlice = createSlice({
  name: 'loading',
  initialState: false,
  reducers: {
    request: () => {
      return true
    },
    finally: () => {
      return false
    },
  },
})
export const loadingActions = loadingSlice.actions
export const loadingReducer = loadingSlice.reducer
