import { StyleSheet, Text, SafeAreaView } from 'react-native'

export default function Favorites() {
  // useEffect(() => {
  //   console.log('aaaaa')
  // })
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorites</Text>
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
