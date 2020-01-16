import { HomeIcon, MenuIcon } from 'appSrc/Assets/Icons'
import AppConfig from 'appSrc/Config/AppConfig'
import React from 'react'
import { TopNavigation, TopNavigationAction } from 'react-native-ui-kitten'

const renderLeftControl = () => {
  return <TopNavigationAction icon={MenuIcon} />
}

const renderRightControls = () => {
  return [<TopNavigationAction key={1} icon={HomeIcon} />]
}

export default props => {
  return (
    <TopNavigation
      {...props}
      leftControl={renderLeftControl()}
      alignment="center"
      title={AppConfig.appName}
      rightControls={renderRightControls()}
    />
  )
}
