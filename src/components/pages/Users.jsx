import { useContext } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `akiyoshi#${val}`,
    email: "test@test.com",
    tel: "090-1234-1234",
    image: "https://source.unsplash.com/yihlaRCCvd4",
    company: {
      name: "テスト株式会社"
    },
    website: "https://akirano-blog.com"
  };
});
export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () =>
    setUserInfo({ isAdmin: userInfo ? !userInfo.isAdmin : false });
  return (
    <SContainer>
      <h2>Users 一覧</h2>
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
