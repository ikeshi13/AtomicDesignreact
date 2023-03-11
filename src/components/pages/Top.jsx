import styled from "styled-components";
import { SecondaryButton } from "../atom/button/SecondaryButton";
import { useHistory } from "react-router-dom";
// import { UserContext } from "../../providers/UserProvider";
import React from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  function onClickAdmin() {
    setUserInfo({ isAdmin: true });
    history.push("/user");
  }
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/user");
  };
  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
