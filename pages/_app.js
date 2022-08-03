import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/LoginContext';


function MyApp({ Component, pageProps }) {
  const [loginToken, setLoginToken] = useState("")
  useEffect(() => {
    setLoginToken(localStorage.getItem('token'))
  }, [])
  return (
    <LoginContext.Provider value={{ loginToken, setLoginToken }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginContext.Provider>
  )
}

export default MyApp
