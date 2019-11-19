import { light, mapping } from '@eva-design/eva'
import React from 'react'
import { StatusBar } from 'react-native'
import { ApplicationProvider } from 'react-native-ui-kitten'

import ReduxNavigation from 'appSrc/Navigation/ReduxNavigation'

const RootContainer = () => {
  return (
    <ApplicationProvider mapping={mapping} theme={light}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ReduxNavigation />
    </ApplicationProvider>
  )
}

export default RootContainer
