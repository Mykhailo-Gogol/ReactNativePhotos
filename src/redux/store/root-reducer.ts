import { combineReducers } from '@reduxjs/toolkit'
import { favoritesReducer } from '../slices/favorites'

export const rootReducer = combineReducers({
  favorits: favoritesReducer,
})
