import {Box, Heading, Text, Flex, Button, ButtonGroup, Icon, useColorModeValue} from '@chakra-ui/react'
import {FaReact, FaHtml5, FaCss3, FaNodeJs, FaWordpress} from 'react-icons/fa'
import {SiJavascript, SiTypescript} from 'react-icons/si'

const About = () => {
    const borderColor = useColorModeValue('purple.600', 'purple.200')
    return (
        <Box mt={5}>
            <Flex flexDirection='column' gap='2' mb={3}>
                <Heading as="h2" size='2xl'>Hello, I am Cayla Franklin</Heading>
                <Heading as="h2" size='2xl'>Software Engineer</Heading>
                <Heading as="h2" size='2xl'>based in Chicago, IL</Heading>
            </Flex>
            
            <ButtonGroup gap='2' variant='link' colorScheme='purple' display='flex' flexWrap='wrap'>
                <Button as="a" target='_blank' href="https://github.com/cjfranklin4" >Github</Button>
                <Button as="a" target='_blank' href="https://www.linkedin.com/in/cayla-franklin-480148149/" >Linkedin</Button>
                <Button as="a" target='_blank' href="https://drive.google.com/file/d/1iCL2FwoJE-EUOPHCiMXNEnW5a2R5__5f/view?usp=sharing" >Resume</Button>
            </ButtonGroup>
            <Text mt={3}>
                I am a software engineer enthusiastic about modern front-end development. I love bringing fresh designs and user experiences to life for people on all platforms and devices.
            </Text>
            <Box mt={5}>
                <Heading as='h2'>Skills.</Heading>
                <Flex gap={3} flexWrap='wrap' mt={3}>
                    <Flex alignItems='center' gap={1}>React.js <Icon as={FaReact} color={borderColor}/></Flex>
                    <Flex alignItems='center' gap={1}>HTML5 <Icon as={FaHtml5} color={borderColor}/></Flex>
                    <Flex alignItems='center' gap={1}>CSS3 <Icon as={FaCss3} color={borderColor}/></Flex>
                    <Flex alignItems='center' gap={1}>Node.js <Icon as={FaNodeJs} color={borderColor}/></Flex>
                    <Flex alignItems='center' gap={1}>Wordpress <Icon as={FaWordpress} color={borderColor}/></Flex>
                    <Flex alignItems='center' gap={1}>Javascript <Icon as={SiJavascript} color={borderColor}/></Flex>
                    <Flex alignItems='center' gap={1}>Typescript <Icon as={SiTypescript} color={borderColor}/></Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default About