import React, { createContext, useState } from 'react'
import { Navigate } from 'react-router-dom';

export const AppContext = createContext()

const user = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
};

const userLogin = async () => {
    
    try {
        let res = await fetch(`https://reqres.in/api/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })

        res = await res.json()
        return res.token
    }
    catch(error) {
        console.log(error)
    }

}

function AppContextProvider({children}) {
    const [isAuth, setAuth] = useState(false)
    const [token, setToken] = useState(null)
    const [loading, setLoading] = useState(false)

    const toggleAuth = async () => {
        setLoading(true)
        const data = await userLogin()
        setAuth(true)
        setToken(data)
        console.log(data)
        setLoading(false)
    }

    
    const logout = () => {
        setAuth(false)
        setToken(null)
    }

    if (isAuth) {
        <Navigate to="/" />
    }
    
  return (
    <AppContext.Provider value={{isAuth, toggleAuth, token, loading, logout}}>
          {children}
    </AppContext.Provider>
  ) 
}

export default AppContextProvider