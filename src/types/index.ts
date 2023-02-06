import { FC } from 'react'

type Routes = 'Photos' | 'Favorites'
type Icons = 'home' | 'bookmark'

export interface RouteType {
  component: FC
  name: Routes
  iconName: Icons
  iconSize: number
  bagde?: boolean
}

export interface ItemType {
  id: number
  albumId: number
  title: string
  url: string
  thumbnailUrl: string
}
