import { createContext,useEffect } from "react"


export const LoginContext = createContext(typeof window !== 'undefined' ? localStorage.getItem('token') :"")