import { AvatarContainer, ImageBox } from "./style";

interface AvatarPropsType {
  imageUrl: string;
}

export const Avatar = ({ imageUrl }: AvatarPropsType) => {
  return (
    <AvatarContainer>
      <ImageBox src={imageUrl} />
    </AvatarContainer>
  );
};
