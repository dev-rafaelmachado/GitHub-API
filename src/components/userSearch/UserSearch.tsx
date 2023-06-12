import { useForm } from "react-hook-form";
import { FormContainer, InputContainer, UserSearchContainer } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export interface UserSearchType {
  Username: string;
}

export const UserSearch = () => {
  const { register, handleSubmit } = useForm<UserSearchType>();
  const { loadUserData } = useContext(UserContext);
  const handleSubmitForm = (data: UserSearchType) => {
    loadUserData(data.Username);
  };

  return (
    <UserSearchContainer onSubmit={handleSubmit(handleSubmitForm)}>
      <FormContainer>
        <InputContainer {...register("Username")} placeholder={"Username"} />
      </FormContainer>
    </UserSearchContainer>
  );
};
