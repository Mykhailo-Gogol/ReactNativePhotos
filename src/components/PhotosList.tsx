import { FC } from 'react'
import { FlatList } from 'react-native'
import { ItemType } from '../types'
import PhotosItem from './PhotosItem'
import FadeInAnimation from './FadeInAnimation'

interface PhotosListProps {
  items: ItemType[]
}

const PhotosList: FC<PhotosListProps> = ({ items }) => {
  return (
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
  )
}

export default PhotosList
