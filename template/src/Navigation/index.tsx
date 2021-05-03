import React from 'react'
import RNBootSplash from 'react-native-bootsplash'
import { NavigationContainer } from '@react-navigation/native'

import { useAppTheme } from 'src/themes'
import dark from 'src/themes/dark'
import light from 'src/themes/light'

import Stacks from './stacks'

const AppNavigation: React.FC = () => {
  const appTheme = useAppTheme()

  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({ fade: true })}
      theme={
        appTheme.mode === 'dark'
          ? dark.theme.reactNavigation
          : light.theme.reactNavigation
      }>
      <Stacks />
    </NavigationContainer>
  )
}

export default AppNavigation
