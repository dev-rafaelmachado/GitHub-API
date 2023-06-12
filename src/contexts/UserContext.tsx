import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../utils/axios";

interface UserProviderProps {
  children: ReactNode;
}

interface UserDataContextType {
  userData: UserDataType;
  loadUserData: (username: string) => Promise<void>;
}

interface UserDataType {
  name: string;
  username: string;
  urlImage: string;
}

export const UserContext = createContext({} as UserDataContextType);

export const UserProvider = ({ children }: UserProviderProps) => {
  const [userData, setUserData] = useState<UserDataType>({} as UserDataType);

  const loadUserData = async (username: string) => {
    const response = await api.get(`/users/${username}`);
    setUserData({
      name: response.data.login,
      username: response.data.name,
      urlImage: response.data.avatar_url,
    });
  };

  useEffect(() => {
    loadUserData("dev-rafaelmachado");
  }, []);

  return (
    <UserContext.Provider value={{ userData, loadUserData }}>
      {children}
    </UserContext.Provider>
  );
};
