import { GridItem, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'
import CrtiticScore from '../components/CrtiticScore'
import DefinitionItem from '../components/DefinitionItem'
import { ExpandableText } from '../components/ExpandableText'
import { GameAttributes } from '../components/GameAttributes'
import GameScreenshot from '../components/GameScreenshot'
import GameTrailer from '../components/GameTrailer'
import useGame from '../hooks/useGame'

export const GameDetailPage = () => {
  const {slug} = useParams()
  const {data: game, isLoading, error } = useGame(slug!)

  if(isLoading) return <Spinner/>
  if (error || !game) throw error

  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
        <GridItem>
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttributes game={game}/>
        </GridItem>
        <GridItem>
            <GameScreenshot gameId={game.id}/>
            <GameTrailer gameId={game.id}/>
        </GridItem>
    </SimpleGrid>
  )
}

export default GameDetailPage