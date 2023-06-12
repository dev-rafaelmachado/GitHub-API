import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import api from "../utils/axios";
import { UserContext } from "./UserContext";

interface ReposProviderProps {
  children: ReactNode;
}

interface ReposContextType {
  repos: ReposDataType[];
}

interface ReposDataType {
  name: string;
  description: string;
  html_url: string;
}

export const ReposContext = createContext({} as ReposContextType);

export const ReposProvider = ({ children }: ReposProviderProps) => {
  const [repos, setRepos] = useState<ReposDataType[]>([]);
  const { userData } = useContext(UserContext);

  const loadRepos = async (username: string) => {
    const response = await api.get(`/users/${username}/repos`);
    const reposData = response.data.map((repo: ReposDataType) => ({
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
    }));
    setRepos(reposData);
  };

  useEffect(() => {
    if (userData && userData.name) {
      loadRepos(userData.name);
    }
  }, [userData]);

  return (
    <ReposContext.Provider value={{ repos }}>{children}</ReposContext.Provider>
  );
};
