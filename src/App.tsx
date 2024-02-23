import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg: `"nav nav" "aside main"`
        }}>
        <GridItem area={'nav'}>
          <NavBar/>
        </GridItem>
        {/* con SHOW -> indico que solo rendreize en pantallas por encima de lg */}
        <Show above='lg'> 
          <GridItem area={'aside'}>Aside</GridItem>
        </Show>
        <GridItem area={'main'}>Main</GridItem>
      </Grid>
    </>
  )
}

export default App
