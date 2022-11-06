import {Flex, Box, Heading, Image, Text, ButtonGroup, Button, Divider, useColorModeValue } from '@chakra-ui/react'
import {SiGithub,} from 'react-icons/si'
import portfolio from './images/portfolio-cropped.png'
import nasa from './images/nasa-cropped.png'
import book from './images/book-cropped.png'
import {CgWebsite} from 'react-icons/cg'

const ProjectContain = () => {
    const borderColor = useColorModeValue('gray.300', 'purple.200')
    const imgColor = useColorModeValue('gray.200', 'gray.800')
    return (
        <Box mt={5} id='work'>
            <Heading as='h3'>Work.</Heading>
            <Flex flexWrap='wrap' gap='3' padding={2}>
                <Box w={['100%','80%', '45%','30%']} boxShadow='lg' border='1px solid' borderColor={borderColor} borderRadius='lg' padding={2} justifyContent='center' display='flex' flexDirection='column' minH='100%'>
                    <Box flexGrow='1'>
                        <Image src={nasa} w='100%' borderRadius='lg' border='1px solid' borderColor={imgColor} />
                        <Heading as='h4' size='lg' mt={2}>NASA APOD App</Heading>
                        <Text fontSize='sm' mt={2}>This is a revamp of my initial NASA APOD API project created using the NASA APOD API API, TypeScript, React, and Chakra UI.</Text>
                        <Text fontSize='sm' mt={2}>The goal for this project was to get comfortable with using TypeScript in React, especially when passing props and HTML click and submit events.</Text>
                    </Box>
                    <Divider mt={2} mb={2} borderColor={borderColor} />
                    <Flex gap='2' mt={2} mb={2} flexWrap='wrap'>
                        <Text fontSize='sm'>TypeScript | React.js | JavaScript | ChakraUI</Text>
                    </Flex>
                    <Divider mt={2} mb={2} borderColor={borderColor} />
                    <ButtonGroup variant='outline' colorScheme='purple' w='100%' gap={2} flexDirection={['column','row']}>
                        <Button rightIcon={<CgWebsite />}   w={['100%','50%']} as='a' href='https://cjfranklin4.github.io/nasa-apod-ts/' target='_blank'>Demo</Button>
                        <Button rightIcon={<SiGithub />}  marginInlineStart='0 !important'  w={['100%','50%']} as='a'  href='https://github.com/cjfranklin4/nasa-apod-ts' target='_blank'>Source Code</Button>
                    </ButtonGroup>
                </Box>
                <Box w={['100%','80%', '45%','30%']} boxShadow='lg' border='1px solid' borderColor={borderColor} borderRadius='lg' padding={2} display='flex' flexDirection='column' minH='100%'>
                    <Box flexGrow='1'>
                        <Image src={book} w='100%' borderRadius='lg' border='1px solid' borderColor={imgColor}  />
                        <Heading as='h4' size='lg' mt={2}>Bookmarked</Heading>
                        <Text fontSize='sm' mt={2}>This is a book search web app created using the Google Books API, React, and Chakra UI.</Text>
                        <Text fontSize='sm' mt={2}>The goal of this project was to become more confortable with REST API's in React, as well as dive deeper into using responsive stylings within Chakra UI for mobile devices.</Text>
                    </Box>
                    <Divider mt={2} mb={2} borderColor={borderColor} />
                    <Flex gap='2' mt={2} mb={2} flexWrap='wrap'>
                        <Text fontSize='sm'>React.js | JavaScript | ChakraUI</Text>
                    </Flex>
                    <Divider mt={2} mb={2} borderColor={borderColor} />
                    <ButtonGroup variant='outline' colorScheme='purple' gap={2} alignSelf='end' w='100%' flexDirection={['column','row']}>
                        <Button rightIcon={<CgWebsite />}  w={['100%','50%']} as='a' href='https://cjfranklin4.github.io/book-search/' target='_blank'>Demo</Button>
                        <Button rightIcon={<SiGithub />}  w={['100%','50%']}  marginInlineStart='0 !important' as='a' href='https://github.com/cjfranklin4/book-search' target='_blank'>Source Code</Button>
                    </ButtonGroup>
                </Box>
                <Box w={['100%','80%', '45%','30%']} boxShadow='lg' border='1px solid' borderColor={borderColor} borderRadius='lg' padding={2} display='flex' flexDirection='column' minH='100%'>
                    <Box flexGrow='1'>
                     <Image src={portfolio} w='100%'  borderRadius='lg' border='1px solid' borderColor={imgColor}  />
                        <Heading as='h4' size='lg' mt={2}>Portfolio Website</Heading>
                        <Text fontSize='sm' mt={2}>I rebooted my initial HTML, CSS, and JS portfolio site with to a new, modern design using React and Material UI.</Text>
                        <Text fontSize='sm' mt={2}>Through this portfolio site itself, I wanted to display my growth as a developer through utlizing modern frameworks.</Text>
                    </Box>
                    
                    <Divider mt={2} mb={2} borderColor={borderColor} />
                    <Flex gap='2' mt={2} mb={2} flexWrap='wrap'>
                        <Text fontSize='sm'>React.js | JavaScript | ChakraUI</Text>
                    </Flex>  <Divider mt={2} mb={2} borderColor={borderColor} /> 
                    <ButtonGroup variant='outline' justifySelf='end' colorScheme='purple' gap={2} w='100%' flexDirection={['column','row']}>
                        <Button rightIcon={<CgWebsite />}  w={['100%','50%']} as='a' href='/' target='_blank'>Demo</Button>
                        <Button rightIcon={<SiGithub />}  w={['100%','50%']} as='a' marginInlineStart='0 !important' href='https://github.com/cjfranklin4/portfolio-react' target='_blank'>Source Code</Button>
                    </ButtonGroup>
                </Box>
            </Flex>
        </Box>
    )
}

export default ProjectContain