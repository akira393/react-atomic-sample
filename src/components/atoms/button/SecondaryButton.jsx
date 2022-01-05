import styled from "styled-components";
import { BasicButton } from "./BasicButton";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BasicButton)`
  background-color: #43555e;
`;
