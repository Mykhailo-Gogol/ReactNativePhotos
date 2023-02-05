import { RouteType } from '../types'
import Photos from '../pages/Photos'
import Favorites from '../pages/Favorites'

export const Routes: RouteType[] = [
  {
    component: Photos,
    name: 'Photos',
    iconName: 'home',
    iconSize: 24,
  },
  {
    component: Favorites,
    name: 'Favorites',
    iconName: 'bookmark',
    iconSize: 24,
    bagde: true,
  },
]
