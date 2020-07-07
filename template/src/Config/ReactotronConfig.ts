import { DEV_SERVER_IP } from 'react-native-dotenv'
import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

import { Tron } from '../../global'

Reactotron.configure({ host: DEV_SERVER_IP }) // controls connection & communication settings
  .useReactNative({}) // add all built-in react native plugins
  .use(asyncStorage({}))
  .use(reactotronRedux())
  .use(sagaPlugin({}))
  .connect() // let's connect!

if (Reactotron.clear) {
  Reactotron.clear()
}

console.tron = Reactotron as Tron
export default Reactotron
