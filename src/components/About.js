import {Box, Heading, Text, Flex, Button, ButtonGroup} from '@chakra-ui/react'
import {FaReact, FaHtml5, FaCss3, FaNodeJs} from 'react-icons/fa'

const About = () => {
    return (
        <Box mt={5}>
            <Flex flexDirection='column' gap='2' mb={3}>
                <Heading as="h2" size='2xl'>Hello, I am Cayla Franklin</Heading>
                <Heading as="h2" size='2xl'>Software Engineer</Heading>
                <Heading as="h2" size='2xl'>based in Chicago, IL</Heading>
            </Flex>
            
            <ButtonGroup gap='2' variant='ghost' colorScheme='purple' as='flex' flexWrap='wrap'>
                <Button as="a" href="#" >Github</Button>
                <Button as="a" href="#" >Linkedin</Button>
                <Button as="a" href="#" >Github</Button>
                <Button as="a" href="#" >Resume</Button>
            </ButtonGroup>
            <Box mt={5}>
                <Heading as='h2'>Skills.</Heading>
                <Text>
                    I am a software engineer, with a focus on front-end development. I am proficent in:
                </Text>
                <Button rightIcon={<FaReact />} variant='ghost'>React.JS</Button>
                <Button rightIcon={<FaHtml5 />} variant='ghost'>HTML5</Button>
                <Button rightIcon={<FaCss3 />} variant='ghost'>CSS3</Button>
                <Button rightIcon={<FaNodeJs />} variant='ghost'>Node.JS</Button>
            </Box>
        </Box>
    )
}

export default About