import { AnyAction, createSlice } from '@reduxjs/toolkit'
import { ItemType } from '../../types/index'

type State = {
  loading: boolean
  items: ItemType[]
  error: string
}

const initialState: State = {
  loading: false,
  items: [],
  error: '',
}

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    request: (state: State) => {
      return { ...state, loading: true }
    },
    success: (state: State, action: AnyAction) => {
      return { ...state, items: action.payload, loading: false }
    },
    failure: (state: State, action: AnyAction) => {
      return { ...state, error: action.payload, loading: false }
    },
  },
})
export const photosActions = photosSlice.actions
export const photosReducer = photosSlice.reducer
