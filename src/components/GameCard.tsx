import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CrtiticScore from './CrtiticScore'
import { Emoji } from './Emoji'
import PlatformIconList from './PlatformIconList'


interface Props{
    game: Game
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
            {/* puedo hacerlo asi -> pero mejor desestructurar al objeto platform   {game.parent_platforms.map((platform) => <Text>{platform.platform.name}</Text>)} */}
            {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
            <HStack marginBottom={3} justifyContent={'space-between'}>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                <CrtiticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize={'2xl'}>
                {game.name}
                <Emoji rating={game.rating_top}/>
            </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard