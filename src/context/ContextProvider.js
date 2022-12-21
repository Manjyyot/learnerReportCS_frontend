import React, { useState } from 'react'
import DataContext from './DataContext'
export default function ContextProvider({ children }) {
  const [manage, setManage] = useState({
    isLoggedIn: false,
    authToken: '',
    usertype: '',
    userdetails: ''

  })

  const loginHandler = (data) => {
  
    setManage((prev) => (
      {
        ...prev,
        isLoggedIn: data.isLoggedIn,
        authToken: data.token,
        usertype: data.type,
        userdetails: data.userDetails
      }
    ))
    // setIsLoggedIn(data.isLoggedIn);

    // setAuthToken(data.token);
    // setUsertype(data.type)
  };
  return (
    <DataContext.Provider value={{
      loginHandler, manage, setManage
    }}>
      {children}
    </DataContext.Provider>
  )
}
