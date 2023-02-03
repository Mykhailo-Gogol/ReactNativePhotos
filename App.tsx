import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { FontAwesome } from '@expo/vector-icons'

import Photos from './src/pages/Photos'
import Favorites from './src/pages/Favorites'

const Stack = createBottomTabNavigator()

export default function App() {
  return (
    // @ts-ignore
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Photos}
          options={{
            tabBarLabel: 'Photos',
            tabBarIcon: () => (
              <FontAwesome name="home" size={24} color="black" />
            ),
          }}
        />
        <Stack.Screen
          name="Saved"
          component={Favorites}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: () => (
              <FontAwesome name="bookmark" size={24} color="black" />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
