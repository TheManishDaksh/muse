import React from 'react'

interface input{
  placeholder : string
  type : string
  value : string
  onChange : React.ChangeEventHandler<HTMLInputElement>
}

function Input({placeholder, type, value, onChange}:input) {
  return (
    <div> 
        <input className='w-56 h-8 p-2 rounded-lg text-start shadow-slate-400 shadow focus:border-none focus:outline-none'
         type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

export default Input