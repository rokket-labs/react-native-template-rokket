import { AppRegistry } from 'react-native'
import App from './src/Containers/App'
import { name as appName } from './app.json'

if (__DEV__) {
  import('./src/Config/ReactotronConfig').then(() =>
    console.log('Reactotron configured')
  )
}

AppRegistry.registerComponent(appName, () => App)
