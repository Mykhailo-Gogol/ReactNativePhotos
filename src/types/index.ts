import { FunctionComponent } from 'react'

type Routes = 'Photos' | 'Favorites'
type Icons = 'home' | 'bookmark'

export interface RouteType {
  component: FunctionComponent
  name: Routes
  iconName: Icons
  iconSize: number
  bagde?: boolean
}

export interface ItemType {
  id: number
  title: string
  thumbnailUrl: string
}
