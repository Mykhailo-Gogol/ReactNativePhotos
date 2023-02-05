// @ts-ignore
import { useState, useEffect } from 'react'
import {
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'
import { ItemType } from '../types'
import { globals } from '../styles/global'
import PhotoList from '../components/PhotoList'

export default function Photos() {
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </TouchableWithoutFeedback>

      <PhotoList items={photos.filter(({ title }) => title.includes(search))} />
    </View>
  )
}

import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  input: {
    width: 320,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
  },
})
