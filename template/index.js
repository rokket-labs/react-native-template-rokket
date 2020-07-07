import 'react-native-gesture-handler'

import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './src/Containers/App'

if (__DEV__) {
  require('./src/Config/ReactotronConfig')
  console.tron.log('Reactotron configured')
}

AppRegistry.registerComponent(appName, () => App)
