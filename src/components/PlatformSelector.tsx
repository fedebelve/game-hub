import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform';
import usePlatforms, { Platform } from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

// interface Props {
//     onSelectPlatform: (platform: Platform) => void;
//     selectedPlatformId?: number;
// }

function PlatformSelector() {
    const {data, error, isLoading} = usePlatforms()
    //const selectedPlatform = data?.results.find( p => p.id === selectedPlatformId)
    const selectedPlatformId = useGameQueryStore( s => s.gameQuery.platformId)
    const selectedPlatform = usePlatform(selectedPlatformId)
    const setPlatformId = useGameQueryStore(s => s.setPlatformId)
    
    if (error) return null;

    return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform?.name || 'Platforms'}</MenuButton>
        <MenuList>
            {data?.results.map(platform => <MenuItem onClick={() => setPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlatformSelector