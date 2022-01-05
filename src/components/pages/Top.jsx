import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "./../atoms/button/SecondaryButton";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  // const [userInfo, setUserInfo] = useRecoilState(userState);
  const setUserInfo = useSetRecoilState(userState);
  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push({ pathname: "/users" });
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push({ pathname: "/users" });
  };
  return (
    <SContainer>
      <h2>topページ</h2>
      <SecondaryButton onClick={onClickAdmin}>アドミンで</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般で</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
