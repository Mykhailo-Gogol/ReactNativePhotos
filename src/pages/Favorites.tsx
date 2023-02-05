import { useEffect, useState } from 'react'
import { View } from 'react-native'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { ItemType } from '../types'
import { globals } from '../styles/global'
import PhotoList from '../components/PhotoList'

export default function Favorites() {
  const [items, setItems] = useState<ItemType[]>([])
  const favorites = useSelector((state: RootState) => state.favorites)

  useEffect(() => {
    setItems(favorites)
  }, [favorites])

  return (
    <View style={globals.container}>
      <PhotoList items={items} />
    </View>
  )
}
