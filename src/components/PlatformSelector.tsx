import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
}

function PlatformSelector({onSelectPlatform}: Props) {
    const {data, error, isLoading} = usePlatforms()
  
    if (error) return null;
    return (
    <Menu>
        <MenuButton onClick={() => onSelectPlatform} as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
        <MenuList>
            {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector