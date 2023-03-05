import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

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
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
