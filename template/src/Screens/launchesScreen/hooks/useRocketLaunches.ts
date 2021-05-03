import { useQuery, UseQueryOptions } from 'react-query'
import { gql } from 'graphql-request'

import { graphqlClient } from 'lib/graphql'

export type LaunchData = {
  mission_name: string
  launch_date_local: Date
  launch_site: {
    site_name_long: string
  }
  links: {
    article_link: string
    video_link: string
  }
  rocket: {
    rocket_name: string
  }
  ships: {
    name: string
    home_port: string
    image: string
  }[]
}

type QueryData = {
  launchesPast: LaunchData[]
}

const LAUNCHES_PAST = gql`
  query {
    launchesPast(limit: 5) {
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`

const getLaunches = async () =>
  graphqlClient().request<QueryData>(LAUNCHES_PAST)

export const useRocketLaunches = (options?: UseQueryOptions<QueryData>) =>
  useQuery('launches', getLaunches, options)
