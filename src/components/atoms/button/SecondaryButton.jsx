import styled from "styled-components";
import { BasicButton } from "./BasicButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BasicButton)`
  background-color: #43555e;
`;
