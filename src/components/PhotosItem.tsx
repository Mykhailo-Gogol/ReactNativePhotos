import { useEffect, useState, FC } from 'react'
import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorites } from '../redux/slices/favorites'
import { RootState } from '../redux/store'
import { ItemType } from '../types'

interface PhotosItemProps {
  item: ItemType
}

const PhotosItem: FC<PhotosItemProps> = ({ item }) => {
  const [favorite, setFavorite] = useState<boolean>(false)
  const favorites = useSelector((state: RootState) => state.favorites)

  const dispatch = useDispatch()

  useEffect(() => {
    const isIn = favorites.map(({ id }) => id).includes(item.id)

    setFavorite(isIn)
  }, [favorites])

  const handlePress = () => {
    dispatch(toggleFavorites(item))
    let alertTitle = favorite ? 'Removed' : 'Added'
    let alertText = favorite
      ? 'Item was removed from Favorites'
      : 'Item was added to Favorites'
    Alert.alert(alertTitle, alertText)
  }

  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          onPress={handlePress}
          style={{
            ...styles.touchable,
            borderColor: favorite ? '#58a6ff' : 'black',
          }}
        >
          <FontAwesome
            name="thumbs-o-up"
            size={24}
            color={favorite ? '#58a6ff' : 'black'}
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
    backgroundColor: '#eee',
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
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  image: {
    height: 150,
  },
  touchable: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 9999,
  },
})

export default PhotosItem
