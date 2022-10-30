import {Flex, Box, Heading, Image,Icon, Tooltip, Text, ButtonGroup, Button } from '@chakra-ui/react'
import {FaReact, FaHtml5, FaCss3, FaNodeJs} from 'react-icons/fa'
import {SiChakraui, SiExpress, SiGithub} from 'react-icons/si'
import {CgWebsite} from 'react-icons/cg'

const ProjectContain = () => {
    return (
        <Box mt={5}>
            <Heading as='h3'>Work.</Heading>
            <Flex flexwrap='wrap' gap='3' padding={2}>
                <Box w={400} boxShadow='lg' borderRadius='lg' padding={2}>
                    <Image src='https://bit.ly/dan-abramov' objectFit='cover' />
                    <Heading as='h4' size='lg'>Title of Project</Heading>
                    <Text fontSize='sm' mt={2}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Text>
                    <Flex gap='2' mt={2}>
                        <Tooltip label='Chakra UI' hasArrow fontSize='md'>
                            <span><Icon as={SiChakraui}/></span>
                        </Tooltip>
                        <Tooltip label='React JS' hasArrow fontSize='md'>
                            <span><Icon as={FaReact}/></span>
                        </Tooltip>
                        <Tooltip label='HTML5' hasArrow fontSize='md'>
                            <span><Icon as={FaHtml5}/></span>
                        </Tooltip>
                        <Tooltip label='CSS3' hasArrow fontSize='md'>
                            <span><Icon as={FaCss3}/></span>
                        </Tooltip>
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