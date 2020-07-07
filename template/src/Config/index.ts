import './ReactotronConfig'

import DebugConfig from './DebugConfig'

// Allow/disallow font-scaling in app
// Text.allowFontScaling = AppConfig.allowTextFontScaling

if (__DEV__) {
  // If ReactNative's yellow box warnings are too much, it is possible to turn
  // it off, but the healthier approach is to fix the warnings.  =)
  console.disableYellowBox = !DebugConfig.yellowBox
  console.ignoredYellowBox = ['Setting a timer']
}
