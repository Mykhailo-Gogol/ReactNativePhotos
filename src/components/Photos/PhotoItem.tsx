import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function Item({ item }: any) {
  return (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity>
          <FontAwesome name="thumbs-o-up" size={24} color="black" />
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
    backgroundColor: '#ddd',
    marginVertical: 8,
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    width: '75%',
    marginRight: 10,
  },
  image: {
    height: 150,
  },
})
