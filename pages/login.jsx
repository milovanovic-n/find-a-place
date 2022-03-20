import React, {useEffect} from 'react'
import Router from 'next/router';
import { getProviders, getSession } from "next-auth/react"
import LoginBtn from '../components/LoginBtn';
import SignUpForm from '../components/SignUpForm';

function Login({providers, session}) {

  useEffect(() => {
    //if(session) return Router.push("/")
  }, [session])

  return (
    <div>
      <LoginBtn provider={providers.google} />
      <LoginBtn provider={providers.facebook} />
      <SignUpForm />
    </div>
  )
}

Login.getInitialProps = async (context) => {
  return {
    providers: await getProviders(context),
    session: await getSession(context)
  }
}

export default Login