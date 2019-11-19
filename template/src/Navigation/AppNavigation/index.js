import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import CounterScreen from 'appSrc/Screens/CounterScreen'
import HomeScreen from 'appSrc/Screens/HomeScreen'

export const ROUTES = {
  Home: 'Home',
  Counter: 'Counter'
}
export const FIRST_SCREEN = ROUTES.Home

const PrimaryNav = createStackNavigator(
  {
    [ROUTES.Home]: HomeScreen,
    [ROUTES.Counter]: CounterScreen
  },
  {
    initialRouteName: FIRST_SCREEN,
    headerMode: 'none'
  }
)

export default createAppContainer(PrimaryNav)
