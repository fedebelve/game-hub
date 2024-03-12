import { Button, Heading, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import { Genre } from "../entities/Genre";
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

// interface Props {
//     onSelectGenre: (genre: Genre) => void;
//     selectedGenreId?: number;
// }

const GenreList = () => {
  const {data, error, isLoading} = useGenres()
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId)

  if (error) return null
  if (isLoading) return <Spinner/>

  return (
    <><Heading fontSize={'2xl'} marginBottom={'3'}>Genres</Heading><List>
          {data?.results.map(genre => <ListItem key={genre.id} paddingY='5px'>
              <HStack>
                  <Image objectFit={'cover'} boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                  <Button textAlign={'left'} whiteSpace={'normal'} fontWeight={genre.id === selectedGenreId? 'bold' : 'normal'} onClick={() => setSelectedGenreId(genre.id)} fontSize={'lg'} variant='link'>{genre.name}</Button>
              </HStack>
          </ListItem>)}
      </List></>
  )
}

export default GenreList