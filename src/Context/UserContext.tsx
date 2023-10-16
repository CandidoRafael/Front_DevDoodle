import { createContext, useState, ReactNode } from "react";


export const UserContext = createContext<any>({});

type UserProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProps) => {
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};