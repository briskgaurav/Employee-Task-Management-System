import React from 'react'

const AuthContext = createContext();

function AuthProvider({children}) {
  return (
    <div>
      <AuthContext.Provider value={{user,setUser}}>
        {children}
      </AuthContext.Provider>
      </div>
  )
}

export default AuthProvider