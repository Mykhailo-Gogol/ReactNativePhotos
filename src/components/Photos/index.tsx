import { FlatList } from 'react-native'

import PhotoItem from './PhotoItem'

export default function Photos({ items }: any) {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      key={(item: any) => item.id}
      data={items.slice(0, 10)}
      renderItem={({ item }: any) => <PhotoItem item={item} />}
      keyExtractor={(item: any) => item.id}
    />
  )
}
