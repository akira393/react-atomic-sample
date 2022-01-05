import styled from "styled-components";
import { BasicButton } from "./BasicButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BasicButton)`
  background-color: #11999e;
`;
