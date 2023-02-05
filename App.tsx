import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { FontAwesome } from '@expo/vector-icons'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './src/redux/store'

import { Routes } from './src/routes/homeRoutes'

const Stack = createBottomTabNavigator()

export default function App() {
  return (
    // @ts-ignorer
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {Routes.map(
              ({ component, name, iconName, iconSize, color, bagde }) => (
                <Stack.Screen
                  // @ts-ignore
                  key={name}
                  navigationKey={name}
                  name={name}
                  component={component}
                  options={{
                    tabBarLabel: name,
                    tabBarBadge: bagde ? 3 : undefined,
                    tabBarIcon: () => (
                      <FontAwesome
                        name={iconName}
                        size={iconSize}
                        color={color}
                      />
                    ),
                  }}
                />
              )
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
