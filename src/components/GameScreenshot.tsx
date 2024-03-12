import { Image, SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import useScreenshots from '../hooks/useScreenshots';
import useTrailers from '../hooks/useTrailers'

interface Props {
    gameId: number;
}

export const GameScreenshot = ({gameId}: Props) => {
    const {data, error, isLoading} = useScreenshots(gameId)
    
    if(isLoading) return null;
    if(error) throw error;
    
    const first = data?.results[0]
    return (
        <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
            {data?.results.map(file=> <Image key={file.id} src={file.image}></Image>)}
        </SimpleGrid>
    )
}

export default GameScreenshot