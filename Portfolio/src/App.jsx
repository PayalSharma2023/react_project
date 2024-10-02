import './App.css';
import Nav from './components/Nav';
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Faq from './components/FAQ';

function App() {

  return (
    <>
      <ChakraProvider>
      <Faq />
     </ChakraProvider>
    </>
  )
}

export default App
