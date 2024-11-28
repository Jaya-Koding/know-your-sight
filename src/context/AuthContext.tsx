import React from 'react'
import Cookies from 'js-cookie'

type AuthContextType = {
  user: {id:number, name:string, email:string} | null,
  getCookie: () => void,
  deleteCookie: () => void
}

const AuthContext = React.createContext<AuthContextType | null>(null)

export const AuthProvider:React.FC<{children: React.ReactNode}> = ({children}) => {
  const [user, setUser] = React.useState<{id:number, name:string, email:string}|null>(null)

  const getCookie = () => {
    const cookieValue = Cookies.get('data')
    if (cookieValue !== undefined) {
      setUser(JSON.parse(cookieValue))
    }
  };
  const deleteCookie = () => {
    Cookies.remove('data')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{user, getCookie, deleteCookie}}>
      {children}
    </AuthContext.Provider>  
    )
}

// custom hook untuk menggunakan auth context
export const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth haru digunakna di dalam provider")
  }
  return context
}