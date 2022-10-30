import {IconButton, Heading, Flex, Spacer, useColorMode } from '@chakra-ui/react'
import {SunIcon, MoonIcon } from '@chakra-ui/icons'
import Navigation from './Navigation'

const PortHeader = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex as='header' pos='sticky' mt={5}>
            <Heading as='h1' size='sm'>Cayla.</Heading>
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