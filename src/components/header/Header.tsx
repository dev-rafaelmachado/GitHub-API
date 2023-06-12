import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import { Avatar } from "./avatar/Avatar";
import { ProfileInfo } from "./profileInfo/ProfileInfo";
import { HeaderContainer } from "./style";

export const Header = () => {
  const { userData } = useContext(UserContext);

  return (
    <HeaderContainer>
      <Avatar imageUrl={userData.urlImage} />
      <ProfileInfo name={userData.name} username={userData.username} />
    </HeaderContainer>
  );
};
