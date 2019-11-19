import React from 'react'
import { SafeAreaView } from 'react-native'
import { Layout } from 'react-native-ui-kitten'
import styles from './ContainerStyles'

const Container = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Layout style={styles.container}>{children}</Layout>
    </SafeAreaView>
  )
}
export default Container
