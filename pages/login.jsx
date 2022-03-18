import React from 'react'
import { getProviders, getSession } from "next-auth/react"

function Login({providers, session}) {
  console.log({providers, session})
  return (
    <div>Login</div>
  )
}

Login.getInitialProps = async (context) => {
  return {
    providers: await getProviders(context),
    session: await getSession(context)
  }
}

export default Login