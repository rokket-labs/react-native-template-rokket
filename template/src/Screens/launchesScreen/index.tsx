import React from 'react'
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItem,
  RefreshControl,
  View,
} from 'react-native'
import styled from '@emotion/native'
import { useTheme } from '@emotion/react'

import Launch from 'components/launch'

import Container from '../../Components/Container'

import { LaunchData, useRocketLaunches } from './hooks/useRocketLaunches'

const FlatListContainer = styled(Container)({
  alignItems: 'stretch',
  justifyContent: 'flex-start',
})

const LaunchesScreen: React.FC = () => {
  const theme = useTheme()
  const { data, isLoading, isFetching, refetch } = useRocketLaunches({
    onError: () => {
      Alert.alert(
        'Error fetching data',
        'There was an error fetching data, please try again',
      )
    },
  })

  const renderLaunch: ListRenderItem<LaunchData> = ({ item }) => (
    <Launch item={item} />
  )

  if (isLoading) return <ActivityIndicator size="large" color={theme.primary} />

  return (
    <FlatListContainer>
      <View>
        <FlatList
          scrollEventThrottle={16}
          data={data?.launchesPast}
          renderItem={renderLaunch}
          keyExtractor={(item) => item.mission_name}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={refetch}
              tintColor={theme.text}
              colors={[theme.text]}
            />
          }
        />
      </View>
    </FlatListContainer>
  )
}

export default LaunchesScreen
