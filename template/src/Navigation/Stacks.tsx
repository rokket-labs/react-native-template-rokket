import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from 'screens/HomeScreen'
import LaunchesScreen from 'src/Screens/LaunchesScreen'

export type RootStackParamList = {
  Home: undefined
  Launches: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const Stacks: React.FC = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Launches"
      component={LaunchesScreen}
      options={{ title: 'Rocket Launches' }}
    />
  </Stack.Navigator>
)

export default Stacks
