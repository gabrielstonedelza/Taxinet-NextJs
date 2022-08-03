import { useState, useContext,useEffect } from "react"
import Header from "./Header"
import HomeHeader from "./HomeHeader"
import { LoginContext } from "../context/LoginContext"

const Layout = ({ children }) => {
  const { loginToken, setLoginToken } = useContext(LoginContext);
  
  return (
    <div>
      <main>
        {
          !loginToken == "" ? <Header /> : <HomeHeader /> 
        }
      </main>
      
        {children}
    </div>
  )
}

export default Layout