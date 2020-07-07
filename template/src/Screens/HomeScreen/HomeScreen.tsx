import { StackScreenProps } from '@react-navigation/stack'
import { Button, List, ListItem, Text } from '@ui-kitten/components'
import React from 'react'
import { Image, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { dependencies } from '../../../package.json'
import Container from '../../Components/Container'
import Header from '../../Components/Header'
import { RootState } from '../../Containers/App'
import { RootStackParamList } from '../../Navigation/Stacks'
import { actions as CatActions } from '../../Redux/CatRedux'
import styles from './HomeScreen.styles'

const data = [
  { name: 'React', version: `${dependencies.react}` },
  {
    name: 'React Native',
    version: `${dependencies['react-native']}`,
  },
  {
    name: 'UI Kitten',
    version: `${dependencies['@ui-kitten/components']}`,
  },
  {
    name: 'React Navigation',
    version: `${dependencies['@react-navigation/native']}`,
  },
  {
    name: 'Redux',
    version: `${dependencies.redux}`,
  },
]

type ItemInfo = {
  item: {
    name: string
    version: string
  }
}

const renderItem = ({ item }: ItemInfo) => {
  return <ListItem title={item.name} description={item.version} />
}

type Props = StackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch()
  const actions = {
    getCat: () => dispatch(CatActions.catRequest({})),
  }
  const url = useSelector((state: RootState) => state.cat.avatar)
  return (
    <Container>
      <Header />
      <List style={styles.listContainer} data={data} renderItem={renderItem} />
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />

        <Button style={styles.button} onPress={actions.getCat}>
          Get cat
        </Button>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Counter')}>
          Navigation test
        </Button>
      </View>
    </Container>
  )
}

export default HomeScreen
