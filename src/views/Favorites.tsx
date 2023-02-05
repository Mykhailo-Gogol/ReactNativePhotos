import { StyleSheet, Text, SafeAreaView } from 'react-native'

import { persistorState } from '../redux/store'

export default function Favorites() {
  const state = persistorState()
  return (
    <SafeAreaView style={styles.container}>
      <Text>{JSON.stringify(state, null, 2)}</Text>
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
