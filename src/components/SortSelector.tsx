import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = ({}) => {
  return (
  <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order By</MenuButton>
      <MenuList>
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Date added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Release date</MenuItem>
          <MenuItem>Popularity</MenuItem>
          <MenuItem>AVG Rating</MenuItem>
          {/* {data.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)} */}
      </MenuList>
  </Menu>
)
}


export default SortSelector