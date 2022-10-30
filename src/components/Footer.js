import {Flex, Box, Heading, Image, Button, ButtonGroup } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box as='footer' mt={5} borderTop='1px solid'>

            <ButtonGroup mt={3} gap='2' variant='link' isAttached colorScheme='purple'>
                <Button as="a" href="#" >Github</Button>
                <Button as="a" href="#" >Linkedin</Button>
                <Button as="a" href="#" >Github</Button>
                <Button as="a" href="#" >Resume</Button>
            </ButtonGroup>

            <Flex mt={3}>Made With ❤ by Cayla Franklin</Flex>

        </Box>
    )
}

export default Footer