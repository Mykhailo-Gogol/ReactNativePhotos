import { useEffect, useState, FC } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { globals } from '../styles/global'
import PhotosList from '../components/PhotosList'

const Favorites: FC = () => {
  const favorites = useSelector((state: RootState) => state.favorites)

  return (
    <View style={globals.container}>
      <PhotosList items={favorites} fallback="Favorites list is empty" />
    </View>
  )
}

export default Favorites
