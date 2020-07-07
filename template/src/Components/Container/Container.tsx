import { Layout } from '@ui-kitten/components'
import React from 'react'
import { SafeAreaView } from 'react-native'

import styles from './ContainerStyles'

const Container: React.FC = ({ children }) => {
  return (
    <Layout level="1" style={styles.container}>
      <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>
    </Layout>
  )
}
export default Container
