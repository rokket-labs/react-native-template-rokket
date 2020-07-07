import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import CounterScreen from '../Screens/CounterScreen'
import HomeScreen from '../Screens/HomeScreen'

export type RootStackParamList = {
  Home: undefined
  Counter: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const Stacks = () => (
  <Stack.Navigator headerMode="none" initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Counter" component={CounterScreen} />
  </Stack.Navigator>
)

export default Stacks
