import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { FontAwesome } from '@expo/vector-icons'

import { Routes } from './src/routes/homeRoutes'

const Stack = createBottomTabNavigator()

export default function App() {
  return (
    // @ts-ignore
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {Routes.map(({ component, name, iconName, iconSize, color, bagde }) => (
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
                <FontAwesome name={iconName} size={iconSize} color={color} />
              ),
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
