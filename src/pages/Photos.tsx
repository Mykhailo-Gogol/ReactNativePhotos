// @ts-ignore
import { useState, useEffect, FC } from 'react'
import { View, Keyboard, TextInput, StyleSheet } from 'react-native'
import { globals } from '../styles/global'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { photosActions } from '../redux/slices/photos'
import PhotosList from '../components/PhotosList'

const Photos: FC = () => {
  const [search, setSearch] = useState('')

  const dispatch = useDispatch()
  const photos = useSelector((state: RootState) => state.photos.items)
  const loading = useSelector((state: RootState) => state.photos.loading)

  const getPhoto = async () => {
    dispatch(photosActions.request())
    try {
      const res = await fetch(
        'https://jsonplaceholder.typicode.com/photos?albumId=1'
      ).then((res) => res.json())
      dispatch(photosActions.success(res))
    } catch (err: any) {
      dispatch(photosActions.failure(err.message))
    }
  }

  useEffect(() => {
    getPhoto()
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
          items={photos?.filter(({ title }) =>
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
