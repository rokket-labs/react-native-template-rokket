import React from 'react'
import { Col, Grid, Row } from 'react-native-easy-grid'
import { Button, Text } from 'react-native-ui-kitten'

import { useDispatch, useSelector } from 'react-redux'

import Container from 'appSrc/Components/Container'
import Header from 'appSrc/Components/Header'
import CounterActions, { counterSelector } from 'appSrc/Redux/CounterRedux'
import styles from './CounterScreenStyles'

const CounterScreen = props => {
  const counter = useSelector(counterSelector)
  const dispatch = useDispatch()
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
            <Button
              textStyle={styles.buttonText}
              onPress={() => actions.decrease()}>
              <Text>-</Text>
            </Button>
          </Col>
          <Col style={styles.center}>
            <Text category="h1">{ButtonText}</Text>
          </Col>
          <Col style={styles.button}>
            <Button onPress={() => actions.increase()}>
              <Text>+</Text>
            </Button>
          </Col>
        </Row>
      </Grid>

      <Button onPress={() => props.navigation.goBack()}>
        <Text>Go back</Text>
      </Button>
    </Container>
  )
}

export default CounterScreen
