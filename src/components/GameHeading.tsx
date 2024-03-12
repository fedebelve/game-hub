import { Heading } from '@chakra-ui/react'
import React from 'react'
import { useGenre } from '../hooks/useGenre'
import useGenres from '../hooks/useGenres'
import usePlatform from '../hooks/usePlatform'
import usePlatforms from '../hooks/usePlatforms'
import useGameQueryStore from '../store'

// interface Props {
//     gameQuery: GameQuery
// }

export const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre = useGenre(genreId)
  
  const platformId = useGameQueryStore(s => s.gameQuery.platformId)
  const platform = usePlatform(platformId)

    const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
    return (
    <Heading marginY={5} fontSize={'5xl'} as='h1'>{heading}</Heading>
  )
}
