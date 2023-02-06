import { FlatList } from 'react-native'
import { ItemType } from '../types'
import PhotoItem from './PhotoItem'

interface PhotosProps {
  items: ItemType[]
}

export default function Photos({ items }: PhotosProps) {
  return (
    <FlatList
      data={items.slice(0, 10)}
      renderItem={({ item }: any) => <PhotoItem item={item} />}
      keyExtractor={(item: any) => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}
