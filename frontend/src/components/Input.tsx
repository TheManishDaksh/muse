import React from 'react'

function Input({placeholder}:{placeholder:string}) {
  return (
    <div> 
        <input className='w-56 h-8 p-2 rounded-lg text-start shadow-slate-400 shadow focus:border-none focus:outline-none'
         type="text"
            placeholder={placeholder}
        />
    </div>
  )
}

export default Input