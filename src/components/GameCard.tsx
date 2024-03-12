import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import { Link }from 'react-router-dom'
import { Game } from "../entities/Game"
import getCroppedImageUrl from '../services/image-url'
import CrtiticScore from './CrtiticScore'
import { Emoji } from './Emoji'
import PlatformIconList from './PlatformIconList'


interface Props{
    game: Game
}

function GameCard({ game }: Props) {
    const platforms = game.parent_platforms? game.parent_platforms.map(p => p.platform): []
  return (
    <Card borderRadius={10} overflow={'hidden'} >
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
            {/* puedo hacerlo asi -> pero mejor desestructurar al objeto platform   {game.parent_platforms.map((platform) => <Text>{platform.platform.name}</Text>)} */}
            {/* {game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)} */}
            <HStack marginBottom={3} justifyContent={'space-between'}>
                <PlatformIconList platforms={platforms} />
                <CrtiticScore score={game.metacritic} />
            </HStack>
            <Heading fontSize={'2xl'}>
                <Link to={'/games/'+ game.slug}>{game.name}</Link>
                <Emoji rating={game.rating_top}/>
            </Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard