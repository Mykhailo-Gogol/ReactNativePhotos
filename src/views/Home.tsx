import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
// @ts-ignore
import { useState, useEffect } from 'react'

import PhotoList from '../components/PhotoList'

export default function Home() {
  const [photos, setPhotos] = useState([])

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
    <SafeAreaView style={styles.container}>
      <PhotoList items={photos} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 0,
  },
})
