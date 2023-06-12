import { styled } from "styled-components";

export const UserSearchContainer = styled.div`
  width: 100%;
  height: 120px;
`;

export const FormContainer = styled.form`
  width: 100%;

  padding: 32px;

  display: grid;
  place-items: center;
`;

export const InputContainer = styled.input`
  width: 70%;
  height: 55px;

  padding-left: 20px;

  border-radius: 12px;
  border: none;
  outline: none;

  background: ${(props) => props.theme["gray-900"]};
`;
