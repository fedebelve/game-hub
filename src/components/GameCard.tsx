import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'


interface Props{
    game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image}></Image>
        <CardBody>
            <Heading fontSize={'2xl'}>
                {game.name}
            </Heading>
            {/* puedo hacerlo asi -> pero mejor desestructurar al objeto platform   {game.parent_platforms.map((platform) => <Text>{platform.platform.name}</Text>)} */}
            {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        </CardBody>
    </Card>
  )
}

export default GameCard