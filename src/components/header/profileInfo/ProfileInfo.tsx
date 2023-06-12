import { NameTittle, ProfileInfoContainer, UsernameTittle } from "./style";

interface ProfileInfoPropsType {
  name: string;
  username: string;
}

export const ProfileInfo = ({ name, username }: ProfileInfoPropsType) => {
  return (
    <ProfileInfoContainer>
      <NameTittle> {name} </NameTittle>
      <UsernameTittle> {username} </UsernameTittle>
    </ProfileInfoContainer>
  );
};
