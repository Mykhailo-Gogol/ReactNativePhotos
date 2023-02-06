// @ts-ignore
import { useState, useEffect, FC } from 'react'
import { View, Keyboard, TextInput, StyleSheet } from 'react-native'
import { ItemType } from '../types'
import { globals } from '../styles/global'
import PhotosList from '../components/PhotosList'

const Photos: FC = () => {
  const [photos, setPhotos] = useState<ItemType[]>([])
  const [search, setSearch] = useState('')

  const getPhotos = async () => {
    const photos = await fetch(
      'https://jsonplaceholder.typicode.com/photos'
    ).then((res) => res.json())

    setPhotos(photos)
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
