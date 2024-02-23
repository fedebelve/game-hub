import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Grid templateAreas={{
        base:`"nav" "main"`,
        lg: `"nav nav" "aside main"`
        }}>
        <GridItem area={'nav'} bg="coral">Nav</GridItem>
        {/* con SHOW -> indico que solo rendreize en pantallas por encima de lg */}
        <Show above='lg'> 
          <GridItem area={'aside'} bg="gold">Nav</GridItem>
        </Show>
        <GridItem area={'main'} bg="dodgerblue">Nav</GridItem>
      </Grid>
    </>
  )
}

export default App
