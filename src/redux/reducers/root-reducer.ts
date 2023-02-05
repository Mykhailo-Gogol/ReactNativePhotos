import { combineReducers } from '@reduxjs/toolkit'
import { favoritesReducer } from './favorites-reducer'

export const rootReducer = combineReducers({
  favorits: favoritesReducer,
})
