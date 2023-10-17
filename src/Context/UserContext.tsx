import { createContext, useState, ReactNode } from "react";
import { User } from "../types/User";

export const UserContext = createContext<any>({});

type UserProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProps) => {
  const [user, setUser] = useState<User | undefined>();
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};