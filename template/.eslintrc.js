module.exports = {
  root: true,
  extends: ['rokket-labs/react-native', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['appSrc/*', './src/*']],
      },
    },
  },
}
