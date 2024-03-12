import { Box, Button, ButtonGroup, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import React from 'react'
import GameGrid from '../components/GameGrid'
import { GameHeading } from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

export const HomePage = () => {
  return (
    <>
      <Grid templateAreas={{
        base:`"main"`,
        lg: `"aside main"`
        }}
        templateColumns= {{
          base: '1fr',
          lg: '200px 1fr'
        }}
        >
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
