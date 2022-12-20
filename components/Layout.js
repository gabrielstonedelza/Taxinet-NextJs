import { useState, useContext,useEffect } from "react"

import HomeHeader from "./HomeHeader"

const Layout = ({ children }) => {

  
  return (
    <div>
      <main>
        {
           <HomeHeader /> 
        }
      </main>
      
        {children}
    </div>
  )
}

export default Layout