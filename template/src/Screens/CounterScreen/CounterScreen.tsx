import { StackScreenProps } from '@react-navigation/stack'
import { Button, Text } from '@ui-kitten/components'
import React from 'react'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { useDispatch, useSelector } from 'react-redux'

import Container from '../../Components/Container'
import Header from '../../Components/Header'
import { RootState } from '../../Redux'
import { RootStackParamList } from '../../Navigation/Stacks'
import { actions as CounterActions } from '../../Redux/CounterRedux'
import styles from './CounterScreen.styles'

type Props = StackScreenProps<RootStackParamList, 'Counter'>

const CounterScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.counter)
  const actions = {
    increase: () => dispatch(CounterActions.increase()),
    decrease: () => dispatch(CounterActions.decrease()),
  }

  const ButtonText = `Counter: ${counter}`

  return (
    <Container>
      <Header />
      <Grid style={styles.grid}>
        <Row style={styles.row}>
          <Col style={styles.button}>
            <Button status="warning" onPress={() => actions.decrease()}>
              {evaProps => <Text {...evaProps}>-</Text>}
            </Button>
          </Col>
          <Col style={styles.center}>
            <Text category="h1">{ButtonText}</Text>
          </Col>
          <Col style={styles.button}>
            <Button status="primary" onPress={() => actions.increase()}>
              {() => <Text>+</Text>}
            </Button>
          </Col>
        </Row>
        <Row style={styles.buttonRow}>
          <Col>
            <Button onPress={() => navigation.goBack()}>Go back</Button>
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

export default CounterScreen
