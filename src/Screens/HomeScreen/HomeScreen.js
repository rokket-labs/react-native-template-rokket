import React from 'react'
import { Button, List, ListItem } from 'react-native-ui-kitten'
import { useDispatch, useSelector } from 'react-redux'

import Container from 'appSrc/Components/Container'
import Header from 'appSrc/Components/Header'
import { ROUTES } from 'appSrc/Navigation/AppNavigation'
import CatActions, { CatSelectors } from 'appSrc/Redux/CatRedux'

import { Image, View } from 'react-native'
import { dependencies } from '../../../package.json'

import styles from './HomeScreenStyles'

const data = [
  { name: 'React', version: `${dependencies.react}` },
  {
    name: 'React Native',
    version: `${dependencies['react-native']}`
  },
  {
    name: 'UI Kitten',
    version: `${dependencies['react-native-ui-kitten']}`
  },
  {
    name: 'React Navigation',
    version: `${dependencies['react-navigation']}`
  },
  {
    name: 'Redux',
    version: `${dependencies.redux}`
  }
]

const renderItem = info => {
  return <ListItem title={info.item.name} description={info.item.version} />
}

const HomeScreen = props => {
  const dispatch = useDispatch()
  const actions = {
    getCat: () => dispatch(CatActions.catRequest())
  }
  const url = useSelector(CatSelectors.selectAvatar)
  return (
    <Container>
      <Header />
      <List data={data} renderItem={renderItem} />
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>

      <Button onPress={actions.getCat}>Get cat</Button>
      <Button onPress={() => props.navigation.navigate(ROUTES.Counter)}>
        Navigation test
      </Button>
    </Container>
  )
}

export default HomeScreen
