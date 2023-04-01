import React from 'react'
import Input from '../../components/Input/Input'
import RegistrationTitle from '../../components/RegistrationTitle'
// import { Link } from 'react-router-dom'
import cls from'./index.module.scss'

export default function SignIn() {
  return (
    <div className={ cls.sign__up }>
      {/* <Link to='/'> {<h2> Назад </h2>} </Link> */}
      <div className={ cls.container }>
      <RegistrationTitle
        title='Вход'
      />
      <Input 
        className= 'input'
        placeholder = 'Логин'
        // value= ''
        onBlur = ''
      />
      <Input 
        className= 'input'
        placeholder = 'Пароль'
        // value= ''
        onBlur = ''
        type = 'password'
      />
      <button className={ cls.btn }>ВОЙТИ</button>
      </div>
    </div>
  )
}
