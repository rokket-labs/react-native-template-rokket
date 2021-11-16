import React from 'react'
import { Button, Platform } from 'react-native'
import { useTheme } from '@emotion/react'
import { StackScreenProps } from '@react-navigation/stack'

import Logo from 'assets/svg/rokket'
import { RootStackParamList } from 'src/navigation/stacks'
import { useAppTheme } from 'src/themes'

import Container from '../../Components/Container'

import { LogoContainer, ThemeDescription, ThemeToggle, Title } from './styles'

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const theme = useTheme()
  const appTheme = useAppTheme()

  return (
    <Container>
      <Title>Rokket Labs</Title>
      <LogoContainer>
        <Logo fill={appTheme.mode === 'dark' ? 'white' : theme.primary} />
      </LogoContainer>
      <ThemeDescription>
        Use this switch to toggle dark mode. Default value comes from OS
        settings.
      </ThemeDescription>
      <ThemeToggle
        trackColor={{
          true: Platform.OS === 'ios' ? theme.primary : theme.secondary,
          false: theme.border,
        }}
        thumbColor={Platform.OS === 'android' ? theme.primary : ''}
        value={appTheme.mode === 'dark'}
        onValueChange={value => appTheme.setMode(value ? 'dark' : 'light')}
      />
      <Button
        title="Go to next page"
        color={theme.primary}
        onPress={() => navigation.navigate('Launches')}
      />
    </Container>
  )
}

export default HomeScreen
