import { AppRegistry } from 'react-native'
import App from './src/Containers/App'
import { name as appName } from './app.json'

if (__DEV__) {
  require('./src/Config/ReactotronConfig')
  console.tron.log('Reactotron configured')
}

AppRegistry.registerComponent(appName, () => App)
