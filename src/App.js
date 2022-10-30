import {Box} from '@chakra-ui/react'
import PortHeader from './components/PortHeader';
import ProjectContain from './components/ProjectContain';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <Box margin='0 auto' padding='0px 30px' maxW='1300px'>
      <PortHeader />
      <About />
      <ProjectContain />
      <Footer />
    </Box>
  );
}

export default App;
