import { RouteType } from '../types'

import Photos from '../views/Home'
import Favorites from '../views/Favorites'

export const Routes: RouteType[] = [
  {
    component: Photos,
    name: 'Photos',
    iconName: 'home',
    iconSize: 24,
    color: 'black',
  },
  {
    component: Favorites,
    name: 'Favorites',
    iconName: 'bookmark',
    iconSize: 24,
    color: 'black',
    bagde: true,
  },
]
