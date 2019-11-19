import DebugConfig from './DebugConfig'
import './ReactotronConfig'

// Allow/disallow font-scaling in app
// Text.allowFontScaling = AppConfig.allowTextFontScaling

console.tron.log('__DEV__', __DEV__)

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = !DebugConfig.yellowBox
  console.ignoredYellowBox = ['Setting a timer']
}
