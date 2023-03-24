import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './pages/Auth/AuthLayout'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/auth/*' element={<AuthLayout />} />
      </Routes>
    </div>
  )
}
