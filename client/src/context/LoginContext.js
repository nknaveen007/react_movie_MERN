import React, { createContext,useState } from 'react'

export const LoginAuth = createContext()

export const LoginContext = (props) => {
    const [token, settoken] = useState(null)

    return (
        <LoginAuth.Provider value={[token,settoken]}>
             {props.children}
        </LoginAuth.Provider>
    )
}


