// @ts-ignore
import { useState, useEffect, FC } from 'react'
import { View, Keyboard, TextInput, StyleSheet } from 'react-native'
import { ItemType } from '../types'
import { globals } from '../styles/global'
import { useDispatch, useSelector } from 'react-redux'
import { loadingActions } from '../redux/slices/loading'
import { RootState } from '../redux/store'
import PhotosList from '../components/PhotosList'

const Photos: FC = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state: RootState) => state.loading)

  const [photos, setPhotos] = useState<ItemType[]>([])
  const [search, setSearch] = useState('')

  const getPhotos = async () => {
    try {
      await dispatch(loadingActions.request())

      const photos = await fetch(
        'https://jsonplaceholder.typicode.com/photos'
      ).then((res) => res.json())

      setPhotos(photos)
    } catch (err) {
      console.log(err)
    } finally {
      dispatch(loadingActions.finally())
    }
  }

  useEffect(() => {
    getPhotos()
  }, [])

  return (
    <View style={globals.container}>
      <>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          onBlur={Keyboard.dismiss}
          value={search}
          placeholder="Quick Search"
          placeholderTextColor="gray"
        />
        <PhotosList
          items={photos.filter(({ title }) =>
            title
              .toLocaleLowerCase()
              .includes(search.trim().toLocaleLowerCase())
          )}
          fallback={loading ? 'Loading' : 'No results'}
        />
      </>
    </View>
  )
}

export const styles = StyleSheet.create({
  input: {
    width: 320,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
})

export default Photos
