import { styled } from "styled-components";

export const RepoContainer = styled.div`
  width: 320px;
  height: 140px;

  background: ${(props) => props.theme["gray-900"]};

  border-radius: 8px;
  padding: 10px 20px;

  display: flex;
  align-items: center;

  gap: 10px;

  & a {
    text-decoration: none;
    color: white;
    width: 30%;
    height: 80%;

    display: grid;
    place-items: center;

    cursor: pointer;
    border-radius: 12px;
    background-color: ${(props) => props.theme["gray-700"]};

    transition: 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const RepoInfo = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 5px;

  gap: 10px;

  & h1 {
    font-size: 1.2rem;
  }

  & p {
    font-size: 0.8rem;
    color: #8d8d99;
  }
`;
