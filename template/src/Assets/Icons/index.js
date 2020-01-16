import { Icon } from './icon.component'

export const MenuIconOutline = style => {
  const source = {
    imageSource: require('./eva/menu-outline.png'),
  }

  return Icon(source, style)
}

export const MenuIcon = style => {
  const source = {
    imageSource: require('./eva/menu.png'),
  }

  return Icon(source, style)
}

export const HomeIconOutline = style => {
  const source = {
    imageSource: require('./eva/home-outline.png'),
  }

  return Icon(source, style)
}

export const HomeIcon = style => {
  const source = {
    imageSource: require('./eva/home.png'),
  }

  return Icon(source, style)
}
