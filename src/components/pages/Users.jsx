import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { userState } from "../../store/userState";
import { useRecoilState } from "recoil";
import { SecondaryButton } from "../atom/button/SecondaryButton";
//import { UserContext } from "../../providers/UserProvider";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `名前${val}`,
    image: "https://source.unsplash.com/8v1T2SCM6Ek",
    email: "12345@icloud.com",
    phone: "090-1111-2222",
    company: {
      name: "ああああ株式会社"
    },
    website: "http://kaisyas.com"
  };
});

export const Users = () => {
  //const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替えボタン</SecondaryButton>
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
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
