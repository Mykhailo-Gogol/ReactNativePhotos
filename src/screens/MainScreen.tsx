import { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Routes } from '../routes/homeRoutes'
import { FontAwesome } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { globals } from '../styles/global'

const Tab = createBottomTabNavigator()

export default function MainScreen() {
  const [total, setTotal] = useState<number>(0)
  const favorites = useSelector((state: RootState) => state.favorites)

  useEffect(() => {
    setTotal(favorites.length)
  }, [favorites])

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        {Routes.map(({ component, name, iconName, iconSize, bagde }) => (
          <Tab.Screen
            key={name}
            navigationKey={name}
            name={name}
            component={component}
            options={{
              tabBarLabel: name,
              tabBarActiveTintColor: 'black',
              tabBarActiveBackgroundColor: '#eee',
              tabBarBadge: bagde && total ? total : undefined,
              tabBarBadgeStyle: globals.badge,
              tabBarIcon: () => <FontAwesome name={iconName} size={iconSize} />,
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  )
}
