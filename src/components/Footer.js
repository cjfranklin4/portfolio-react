import {Flex, Box, Button, ButtonGroup } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box as='footer' mt={5} borderTop='1px solid'>

            <ButtonGroup mt={3} gap='2' variant='link' isAttached colorScheme='purple'>
                <Button as="a" target='_blank' href="https://github.com/cjfranklin4" >Github</Button>
                <Button as="a" target='_blank' href="https://www.linkedin.com/in/cayla-franklin-480148149/" >Linkedin</Button>
                <Button as="a" target='_blank' href="https://drive.google.com/file/d/1iCL2FwoJE-EUOPHCiMXNEnW5a2R5__5f/view?usp=sharing" >Resume</Button>
            </ButtonGroup>

            <Flex mt={3} mb={3}>Made With ❤ by Cayla Franklin</Flex>

        </Box>
    )
}

export default Footer