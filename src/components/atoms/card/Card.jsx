import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};
//親要素いっぱいまで広がるようになっている
//カードはどこからでも利用できるようにするために、ここでサイズの制限はやらない
const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
