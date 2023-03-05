import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SerchInput } from "./components/molecules/SerchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { HeaderOnryLayout } from "./components/templates/HeaderOnlyLayout";
import "./styles.css";

const user = {
  name: "あああああああ名前",
  image: "https://source.unsplash.com/8v1T2SCM6Ek",
  email: "12345@icloud.com",
  phone: "090-1111-2222",
  company: {
    name: "ああああ株式会社"
  },
  website: "http://kaisyas.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <SerchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
