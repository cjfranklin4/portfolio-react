import {Flex, Box, Heading, Image,Icon, Text, ButtonGroup, Button } from '@chakra-ui/react'
import {FaReact, FaHtml5, FaCss3, FaNodeJs} from 'react-icons/fa'
import {SiChakraui, SiExpress, SiGithub, SiJavascript} from 'react-icons/si'
import {CgWebsite} from 'react-icons/cg'

const ProjectContain = () => {
    return (
        <Box mt={5}>
            <Heading as='h3'>Work.</Heading>
            <Flex flexwrap='wrap' gap='3' padding={2}>
                <Box w={400} boxShadow='lg' borderRadius='lg' padding={2}>
                    <Image src='https://bit.ly/dan-abramov' w='100%' />
                    <Heading as='h4' size='lg'>Title of Project</Heading>
                    <Text fontSize='sm' mt={2}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                    <Flex gap='2' mt={2} mb={2} flexWrap='wrap'>
                        <Flex alignItems='center' gap={1}>ChakraUI <Icon as={SiChakraui}/></Flex>
                        <Flex alignItems='center' gap={1}>React.js <Icon as={FaReact}/></Flex>
                        <Flex alignItems='center' gap={1}>HTML5 <Icon as={FaHtml5}/></Flex>
                        <Flex alignItems='center' gap={1}>CSS3 <Icon as={FaCss3}/></Flex>
                        <Flex alignItems='center' gap={1}>Express <Icon as={SiExpress}/></Flex>
                        <Flex alignItems='center' gap={1}>Node.js <Icon as={FaNodeJs}/></Flex>
                    </Flex>
                    <ButtonGroup isAttached variant='outline'>
                        <Button rightIcon={<CgWebsite />}>Demo</Button>
                        <Button rightIcon={<SiGithub />}>Source Code</Button>
                    </ButtonGroup>
                </Box>
            </Flex>
        </Box>
    )
}

export default ProjectContain