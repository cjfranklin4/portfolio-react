import {Flex, Button, Menu, MenuButton, MenuItem, Box, MenuList, IconButton} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'

const Navigation = () => {
    return (
        <Box>
            <Flex as='nav' gap='2' mr={2} display={['none', 'flex']}>
                <Button href="#" size="sm" variant='ghost'>About</Button>
                <Button href="#" size="sm" variant='ghost'>Work</Button>
                <Button href="#" size="sm" variant='ghost'>Resume</Button>
            </Flex>
            {/* <Flex as='nav' gap='2' mr={2} display={['flex', 'none']}>
                
                <Button href="#" size="sm" variant='ghost'>About</Button>
                <Button href="#" size="sm" variant='ghost'>Work</Button>
                <Button href="#" size="sm" variant='ghost'>Resume</Button>
            </Flex> */} 
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    display={['flex', 'none']}
                    size='sm'
                />
                <MenuList>
                    <MenuItem as='a' href="#">
                    About
                    </MenuItem>
                    <MenuItem>
                    Work
                    </MenuItem>
                    <MenuItem>
                    Resume
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
        
    )
}

export default Navigation