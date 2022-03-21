import { createContext, ReactNode, useState } from "react";

type User = {
  name: string;
}

type AuthContextType = {
  user: User | undefined;
  newUser: (username: string) => void;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>();

  function newUser(username: string){
    setUser({
      name: username
    })
  }

  return (
    <AuthContext.Provider value={{ user, newUser }}>
        {props.children}
    </AuthContext.Provider>
);
}