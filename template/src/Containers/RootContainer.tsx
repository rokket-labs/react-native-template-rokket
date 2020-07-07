import { Text } from '@ui-kitten/components'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'

import AppNavigation from '../Navigation'

const RootContainer = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 })
  }, [])

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <AppNavigation />
    </>
  )
}

export default RootContainer
