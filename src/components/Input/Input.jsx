import React from 'react';
import cls from './index.module.scss'

const Input = ( {className, placeholder,onBlur,value, type} ) => {

  return (
    <div className={ cls.input }>
      <input 
        className={className} 
        placeholder={placeholder} 
        value={value}
        onBlur={onBlur}
        type = {type}        
      />                
    </div>
  )
}

export default Input