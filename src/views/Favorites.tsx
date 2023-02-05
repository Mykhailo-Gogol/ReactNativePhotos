import { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { ItemType } from '../types'

import PhotoList from '../components/PhotoList'

export default function Favorites() {
  const [items, setItems] = useState<ItemType[]>([])
  const favorits = useSelector((state: RootState) => state.favorits)

  useEffect(() => {
    setItems(favorits)
  }, [favorits])

  return (
    <SafeAreaView style={styles.container}>
      <PhotoList items={items} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
})
