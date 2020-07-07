import { Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components'
import React from 'react'

import AppConfig from '../../Config/AppConfig'

const HomeIcon = (props: any) => <Icon {...props} name="home" />
const MenuIcon = (props: any) => <Icon {...props} name="menu" />

const renderLeftControl = () => {
  return <TopNavigationAction icon={MenuIcon} />
}

const renderRightControls = () => {
  return <TopNavigationAction key={1} icon={HomeIcon} />
}

export default () => {
  return (
    <TopNavigation
      accessoryLeft={() => renderLeftControl()}
      alignment="center"
      title={AppConfig.appName}
      accessoryRight={() => renderRightControls()}
    />
  )
}
