import {IconButton, Heading, Flex, Spacer, useColorMode, useColorModeValue } from '@chakra-ui/react'
import {SunIcon, MoonIcon } from '@chakra-ui/icons'
import Navigation from './Navigation'

const PortHeader = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('white', 'gray.800')
    const color = useColorModeValue('black', 'white')
    return (
        <Flex as='header' pos='sticky' top='0' zIndex='2' pt={5} pb={2} backgroundColor={bg} color={color}>
            <Heading as='h1' size='sm' alignSelf='center'>Cayla.</Heading>
            <Spacer />
            <Navigation/>
            <IconButton 
                onClick={toggleColorMode}
                colorScheme='purple'
                variant='ghost'
                aria-label='toggle color mode' 
                size='sm'
                icon={colorMode === 'light' ? <MoonIcon />  : <SunIcon />}
            ></IconButton>
        </Flex>
    )
}

export default PortHeader