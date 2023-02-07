import { photosReducer } from './../slices/photos'
import { combineReducers } from '@reduxjs/toolkit'
import { favoritesReducer } from '../slices/favorites'

export const rootReducer = combineReducers({
  favorites: favoritesReducer,
  photos: photosReducer,
})
