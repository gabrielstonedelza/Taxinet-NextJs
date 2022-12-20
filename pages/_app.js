import { useState, useEffect } from 'react'
import '../styles/globals.css'
import Layout from '../components/Layout'
import 'react-toastify/dist/ReactToastify.css';



function MyApp({ Component, pageProps }) {
  const [loginToken, setLoginToken] = useState("")
  useEffect(() => {
    setLoginToken(localStorage.getItem('token'))
  }, [])
  return (
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
   
  )
}

export default MyApp
