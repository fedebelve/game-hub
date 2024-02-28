import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import NavBar from './components/NavBar'
import PlatformSelector from './components/PlatformSelector'
import { Genre } from './hooks/useGenre'
import { Platform } from './hooks/usePlatforms'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
          <NavBar/>
        </GridItem>
        {/* con SHOW -> indico que solo rendreize en pantallas por encima de lg */}
        <Show above='lg'> 
          <GridItem area={'aside'} paddingX={5}>
            <GenreList selectedGenre={selectedGenre} onSelectGenre={genre => setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        <GridItem area={'main'}>
          <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={platform => setSelectedPlatform(platform)}/>
          <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App
