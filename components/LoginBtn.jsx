import React from 'react'
import { signIn } from "next-auth/react"

function LoginBtn({provider}) {
  return (
    <div>
      <button 
        className='px-10 py-4 rounded-lg shadow-md font-bold hover:shadow-xl'
        onClick={() => signIn(provider.id)}  
      >
        Sign in with {provider.name}
      </button>
    </div>
  )
}

export default LoginBtn