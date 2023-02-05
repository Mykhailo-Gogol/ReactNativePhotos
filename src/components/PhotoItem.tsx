import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorites } from '../redux/slices/favorites'
import { RootState } from '../redux/store'
import { ItemType } from '../types'

type ItemProps = {
  item: ItemType
}

export default function Item({ item }: ItemProps) {
  const [favorite, setFavorite] = useState<boolean>(false)
  const favorites = useSelector((state: RootState) => state.favorites)

  const dispatch = useDispatch()

  useEffect(() => {
    const isIn = favorites.map(({ id }) => id).includes(item.id)

    setFavorite(isIn)
  }, [favorites])

  const handlePress = () => {
    dispatch(toggleFavorites(item))
  }

  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={handlePress} style={styles.touchable}>
          <FontAwesome
            name="thumbs-o-up"
            size={24}
            color={favorite ? 'blue' : 'black'}
          />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: item.thumbnailUrl,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    width: 320,
    backgroundColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
  },
  header: {
    paddingVertical: 24,
    paddingLeft: 16,
    paddingRight: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    width: '75%',
    marginRight: 16,
  },
  image: {
    height: 150,
  },
  touchable: {
    padding: 8,
  },
})
