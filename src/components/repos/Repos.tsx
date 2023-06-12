import { useForm } from "react-hook-form";
import { FormContainer, InputContainer } from "../userSearch/style";
import { ListReposBox, ReposContainer } from "./style";
import { useContext, useState } from "react";
import { ReposContext } from "../../contexts/ReposContext";
import Repo from "./repo/Repo";

interface ReposSearchType {
  Repositories: string;
}

export const Repos = () => {
  const { register, handleSubmit } = useForm<ReposSearchType>();

  const { repos } = useContext(ReposContext);
  const [filteredRepos, setFilteredRepos] = useState(repos);

  const handleSubmitForm = (data: ReposSearchType) => {
    const searchText = data.Repositories.toLowerCase();
    const filteredItems = repos.filter((item) =>
      item.name.toLowerCase().includes(searchText)
    );

    setFilteredRepos(filteredItems);
  };

  return (
    <ReposContainer>
      <FormContainer onSubmit={handleSubmit(handleSubmitForm)}>
        <InputContainer
          placeholder="Repositories"
          {...register("Repositories")}
        />
      </FormContainer>
      <ListReposBox>
        {filteredRepos.map((item, index) => (
          <Repo
            key={index}
            name={item.name}
            description={item.description}
            url={item.html_url}
          />
        ))}
      </ListReposBox>
    </ReposContainer>
  );
};
