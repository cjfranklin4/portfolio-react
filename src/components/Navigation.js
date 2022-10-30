import {Flex, Button} from '@chakra-ui/react'

const Navigation = () => {
    return (
        <Flex as='nav' gap='2' mr={2}>
            <Button href="#" size="sm" variant='ghost'>About</Button>
            <Button href="#" size="sm" variant='ghost'>Work</Button>
            <Button href="#" size="sm" variant='ghost'>Resume</Button>
        </Flex>
    )
}

export default Navigation