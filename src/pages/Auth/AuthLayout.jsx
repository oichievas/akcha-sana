import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function AuthLayout() {
  return (
    <Routes>
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}
