import { FC } from 'react'
import { FlatList, Text } from 'react-native'
import { ItemType } from '../types'
import PhotosItem from './PhotosItem'
import FadeInAnimation from './FadeInAnimation'

interface PhotosListProps {
  items: ItemType[]
  fallback: string
}

const PhotosList: FC<PhotosListProps> = ({ items, fallback }) => {
  return items?.length ? (
    <FlatList
      data={items.slice(0, 10)}
      renderItem={({ item, index }: { item: ItemType; index: number }) => (
        <FadeInAnimation index={index}>
          <PhotosItem item={item} />
        </FadeInAnimation>
      )}
      keyExtractor={(item: ItemType) => item.id.toString()}
      showsVerticalScrollIndicator={false}
    />
  ) : (
    <Text style={{ flex: 1 }}>{fallback}</Text>
  )
}

export default PhotosList
