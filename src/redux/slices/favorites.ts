import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemType } from '../../types'

const initialFavorites: ItemType[] = []

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialFavorites,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<ItemType>) => {
      const saved = state.find((el) => el.id === action.payload.id)
      const updated = saved
        ? state.filter((el) => el.id !== action.payload.id)
        : [...state, action.payload]

      return updated
    },
  },
})

export const favoritesActions = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer
