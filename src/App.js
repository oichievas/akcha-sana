import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './pages/Auth/AuthLayout'

export default function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='/auth/*' element={<AuthLayout />} />
      </Routes>
    </ChakraProvider>
  )
}
