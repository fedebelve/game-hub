import { HStack, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'
import useGameQueryStore from '../store';
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = ()=> {
  const { setSearchText } = useGameQueryStore()
  return (
    <HStack padding={'10px'}>
      <Link to='/'>
        <Image src={logo} boxSize='60px' objectFit={'cover'}/>
      </Link>
        <SearchInput 
        //onSearch={(text) => onSearch(text)}
        />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar