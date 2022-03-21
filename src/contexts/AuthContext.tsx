import { createContext, ReactNode, useEffect, useState } from "react";

type User = {
  name: string;
}

type AuthContextType = {
  user: User | undefined;
  newUser: (n: string) => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  const username = props.children?.toString

  useEffect(()=>{
    setUser({
      name: 'sdsds'
    })
  }, [])

  function newUser(n: string){
    setUser({
      name: n
    })
  }

  return (
    <AuthContext.Provider value={{ user, newUser }}>
        {props.children}
    </AuthContext.Provider>
);
}