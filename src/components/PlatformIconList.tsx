import { HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { Platform } from '../hooks/useGames'
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa'
import { MdPhoneIphone} from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons'


interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: {[key: string]: IconType} = { //le digo que no se preocupe por la key, porque esos names van a cumplir la funcion
        pc: FaWindows,
        playstatition: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid
    }

    return (
    <HStack marginY={1} >
     {platforms.map((platform) => (<Icon as={iconMap[platform.slug]} color='gray.500'/> ))}
    </HStack>
  )
}

export default PlatformIconList