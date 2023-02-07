import { createSlice } from '@reduxjs/toolkit'
import { ItemType } from '../../types/index'

type State = {
  loading: boolean
  items: ItemType[]
  error: object
}

const initialState: State = {
  loading: false,
  items: [],
  error: {},
}

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    request: (state) => {
      return { ...state, loading: true }
    },
    success: (state, action) => {
      return { ...state, items: action.payload }
    },
    failure: (state, action) => {
      return { ...state, error: action.payload }
    },
  },
})
export const photosActions = photosSlice.actions
export const photosReducer = photosSlice.reducer
