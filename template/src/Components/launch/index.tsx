import React from 'react'
import { Linking } from 'react-native'
import dayjs from 'dayjs'
import { isEmpty } from 'ramda'

import { LaunchData } from 'screens/launchesScreen/hooks/useRocketLaunches'

import {
  Card,
  CoverImage,
  ExternalLink,
  InfoContainer,
  InfoText,
  Title,
} from './styles'

type LaunchProps = {
  item: LaunchData
}

const Launch: React.FC<LaunchProps> = ({ item }) => {
  const imageSrc = !isEmpty(item.ships)
    ? item.ships[0].image
    : 'https://d1otjdv2bf0507.cloudfront.net/image-handler/ts/20190826075103/ri/950/src/images/Article_Images/ImageForArticle_1648(1).jpg'

  const handleUrlOpen = () => Linking.openURL(item.links.article_link)

  return (
    <Card>
      <CoverImage source={{ uri: imageSrc }} />
      <InfoContainer>
        <Title>{item.mission_name}</Title>
        <InfoText>
          Launch Date:{' '}
          {dayjs(item.launch_date_local).format('DD/MM/YYYY HH:mm')}
        </InfoText>
        {item.links.article_link && (
          <ExternalLink onPress={handleUrlOpen}>Go to launch info</ExternalLink>
        )}
      </InfoContainer>
    </Card>
  )
}

export default Launch
