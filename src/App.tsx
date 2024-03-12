import { Box, Button, ButtonGroup, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import { GameHeading } from './components/GameHeading'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import { Genre } from './hooks/useGenres'
import { Platform } from './hooks/usePlatforms'


function App() {
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  // const  [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <>
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg: `"nav nav" "aside main"`
        }}
        templateColumns= {{
          base: '1fr',
          lg: '200px 1fr'
        }}
        >
        <GridItem area={'nav'}>
          {/* <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/> */}
          <NavBar/>
        </GridItem>
        {/* con SHOW -> indico que solo rendreize en pantallas por encima de lg */}
        <Show above='lg'> 
          <GridItem area={'aside'} paddingX={5}>
            <GenreList/>
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <Box paddingLeft={10} >
            <GameHeading/>
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector/>
              </Box>
            <SortSelector />
            </Flex>
          </Box>
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
