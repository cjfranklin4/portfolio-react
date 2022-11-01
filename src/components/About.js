import {Box, Heading, Text, Flex, Button, ButtonGroup, Icon} from '@chakra-ui/react'
import {FaReact, FaHtml5, FaCss3, FaNodeJs, FaWordpress} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'

const About = () => {
    return (
        <Box mt={5}>
            <Flex flexDirection='column' gap='2' mb={3}>
                <Heading as="h2" size='2xl'>Hello, I am Cayla Franklin</Heading>
                <Heading as="h2" size='2xl'>Software Engineer</Heading>
                <Heading as="h2" size='2xl'>based in Chicago, IL</Heading>
            </Flex>
            
            <ButtonGroup gap='2' variant='link' colorScheme='purple' as='flex' flexWrap='wrap'>
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
                <Flex gap={3} flexWrap='wrap' mt={3}>
                    <Flex alignItems='center' gap={1}>React.js <Icon as={FaReact}/></Flex>
                    <Flex alignItems='center' gap={1}>HTML5 <Icon as={FaHtml5}/></Flex>
                    <Flex alignItems='center' gap={1}>CSS3 <Icon as={FaCss3}/></Flex>
                    <Flex alignItems='center' gap={1}>Node.js <Icon as={FaNodeJs}/></Flex>
                    <Flex alignItems='center' gap={1}>Wordpress <Icon as={FaWordpress}/></Flex>
                    <Flex alignItems='center' gap={1}>Javascript <Icon as={SiJavascript}/></Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default About