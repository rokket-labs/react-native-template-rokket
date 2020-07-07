# React Native Template Rokket

![npm](https://img.shields.io/npm/v/react-native-template-rokket?color=success&style=flat-square)

_:rocket: Developed by [Rokket Labs](https://rokketlabs.com) :rocket:_

Official template for React Native apps used by Rokket Labs for its iOS and Android apps. It is based on the newest and latest version of React Native and includes several starter packages for you to start your own app ASAP! :rocket:

This template is useful for all types of apps, as it includes the bare minimum for you to start coding in just a couple of minutes. This templates also includes useful debugging tools such as Reactotron, and sets a standard for your development team, such as out-of-the-box ESLint support and file structure for components, views and tests.

## Installation and Usage

:warning: This template is intended for React Native versions >= 0.60. It has not been tested with previous versions. :warning:

To start a new app with React Native Template Rokket, simply start a new project using React Native CLI with npx (https://facebook.github.io/react-native/docs/getting-started.html). To do this, create a new app using `rokket` as a template. Easy as pie! :cake:

```
npx --ignore-existing react-native init PROJECT_NAME --template react-native-template-rokket
```

The template will replace your project's name in all relevant parts of the app. Neat! :godmode:

To start using your app, first copy the existing `.env.example` file into a new `.env` file and replace your IP address to start debugging with Reactotron. After that, simply run `yarn ios` (only on Mac) or `yarn android` (emulator must be running or an Android device with USB debugging must be plugged in) depending on your platform of choice.

## Features

This template includes the following:

- Full Typescript 3.8 support
- React Native 0.62 support (now with Hooks! :raised_hands:)
- Easy to use and understand folder structure to get you up and running as fast as possible
- Starter example with an essential counter component and a cat-tastic component :cat:
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/) 5.0 component framework and themes
- [React Navigation](https://reactnavigation.org/) 5.0
- [Reactotron](https://github.com/infinitered/reactotron) configured for debugging (including console.tron shortcut)
- [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) for component testing
- Redux support (with Sagas example)
- ESLint, TSLint and Prettier configured out-of-the-box
- Visual Studio Code settings for Prettier and ESLint (:warning: must install VSCode extensions to use them)

## How to contribute

If you'd like to contribute to this template, your help is more than welcome! :feelsgood:

Big thanks to [Chris Geirman](https://github.com/geirman) and his super useful [guide](https://medium.com/dailyjs/the-1-2-3s-of-react-native-templates-1f5dda037e11) on React Native templates, which you may want to read before adding your contributions.

### Local testing

Fork this repository, clone it, and start a new app with the following command to use the local template:

```
npx react-native init test --template file:///path/to/your/cloned/repo
```

### Pull requests and Issues

PR's and issues are a great contribution for us, and we'll get to them as fast as we (humanly :robot:) can. Please create your pull requests from your own fork, and if you're raising an issue, try to be as descriptive as possible so we can zap those pesky bugs :zap:.
