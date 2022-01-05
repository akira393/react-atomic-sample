import { memo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  console.log("UserIconWithName");
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  // const [userInfo, setUserInfo] = useRecoilState(userState);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  color: #40514e;
  font-weight: bold;
  font-size: 18px;
  margin: 0px;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
