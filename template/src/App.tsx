import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import 'react-native-gesture-handler'

import AppNavigation from './navigation'
import ThemeManager from './themes'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <ThemeManager>
      <QueryClientProvider client={queryClient}>
        <AppNavigation />
      </QueryClientProvider>
    </ThemeManager>
  )
}

export default App
