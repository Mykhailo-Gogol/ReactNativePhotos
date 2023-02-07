import { combineReducers } from '@reduxjs/toolkit'
import { favoritesReducer } from '../slices/favorites'
import { photosReducer } from './../slices/photos'

export const rootReducer = combineReducers({
  favorites: favoritesReducer,
  photos: photosReducer,
})
