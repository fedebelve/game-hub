import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform';
import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

function PlatformSelector({onSelectPlatform, selectedPlatformId}: Props) {
    const {data, error, isLoading} = usePlatforms()
    //const selectedPlatform = data?.results.find( p => p.id === selectedPlatformId)
    const selectedPlatform = usePlatform(selectedPlatformId)
    
    if (error) return null;

    return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            {data?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector