import { FunctionComponent } from 'react'

type Routes = 'Photos' | 'Favorites'
type Icons = 'home' | 'bookmark'

export type RouteType = {
  component: FunctionComponent
  name: Routes
  iconName: Icons
  iconSize: number
  bagde?: boolean
}

export type ItemType = {
  id: number
  title: string
  thumbnailUrl: string
}
