
import './App.css';
import NavBar from './NavBar';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  
  return(
   <ChakraProvider>
     <NavBar></NavBar>
   </ChakraProvider>
  )
}

export default App;
