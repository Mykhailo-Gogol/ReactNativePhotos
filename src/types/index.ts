export type RouteType = {
  component: any
  name: 'Photos' | 'Favorites'
  iconName: 'home' | 'bookmark'
  iconSize: number
  color: string
  bagde?: boolean
}

export type ItemType = {
  id: number
  title: string
  thumbnailUrl: string
}
