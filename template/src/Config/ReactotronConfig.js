import { DEV_SERVER_IP } from 'react-native-dotenv'
import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'
import Immutable from 'seamless-immutable'

Reactotron.configure({ host: DEV_SERVER_IP }) // controls connection & communication settings
  .useReactNative({}) // add all built-in react native plugins
  .use(asyncStorage({}))
  .use(reduxPlugin({ onRestore: Immutable }))
  .use(sagaPlugin({}))
  .connect() // let's connect!

if (Reactotron.clear) {
  Reactotron.clear()
}

console.tron = Reactotron
