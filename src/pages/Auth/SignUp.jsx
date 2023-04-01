import React from 'react'
import Input from '../../components/Input/Input'
import RegistrationTitle from '../../components/RegistrationTitle'
// import { Link } from 'react-router-dom'
import cls from'./index.module.scss'

export default function SignUp() {
  return (
    <div className={ cls.sign__up }>
      {/* <Link to='/'> {<h2> Назад </h2>} </Link> */}
      <div className={ cls.container }>
      <RegistrationTitle
        title='Регистрация'
        underTitle='Для входа в избранное и лич. кабинет вам необходимо зарегистрироваться'
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
      <Input 
        className= 'input'
        placeholder = 'Секретное слово'
        // value= ''
        onBlur = ''
        type = 'text'
      />
      <button className={ cls.btn }>ПРОДОЛЖИТЬ</button>
      </div>
    </div>
  )
}
