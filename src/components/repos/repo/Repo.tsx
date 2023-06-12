import { RepoContainer, RepoInfo } from "./style";
import { GithubLogo } from "@phosphor-icons/react";

interface RepoPropsType {
  name: string;
  description: string;
  url: string;
}

const Repo = ({ name, description, url }: RepoPropsType) => {
  return (
    <RepoContainer>
      <RepoInfo>
        <h1>{name}</h1>
        <p>{description}</p>
      </RepoInfo>
      <a href={url}>
        <GithubLogo size={32} />
      </a>
    </RepoContainer>
  );
};

export default Repo;
