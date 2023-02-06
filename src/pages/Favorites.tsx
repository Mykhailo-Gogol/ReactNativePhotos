import { useEffect, useState, FC } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { ItemType } from '../types'
import { globals } from '../styles/global'
import PhotosList from '../components/PhotosList'

const Favorites: FC = () => {
  const [items, setItems] = useState<ItemType[]>([])
  const favorites = useSelector((state: RootState) => state.favorites)

  useEffect(() => {
    setItems(favorites)
  }, [favorites])

  return (
    <View style={globals.container}>
      <PhotosList items={items} />
    </View>
  )
}

export default Favorites
