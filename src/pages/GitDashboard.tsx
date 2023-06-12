import { Header } from "../components/header/Header";
import { Repos } from "../components/repos/Repos";
import { UserSearch } from "../components/userSearch/UserSearch";
import { ReposProvider } from "../contexts/ReposContext";
import { UserProvider } from "../contexts/UserContext";
import { GitDashboardContainer } from "./styles";

export const GitDashboard = () => {
  return (
    <GitDashboardContainer>
      <UserProvider>
        <UserSearch />
        <Header />
        <ReposProvider>
          <Repos />
        </ReposProvider>
      </UserProvider>
    </GitDashboardContainer>
  );
};
