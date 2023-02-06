import { loadingReducer } from './../slices/loading'
import { combineReducers } from '@reduxjs/toolkit'
import { favoritesReducer } from '../slices/favorites'

export const rootReducer = combineReducers({
  favorites: favoritesReducer,
  loading: loadingReducer,
})
