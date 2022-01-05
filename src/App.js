import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "akiyoshi",
  email: "test@test.com",
  tel: "090-1234-1234",
  image: "https://source.unsplash.com/yihlaRCCvd4",
  company: {
    name: "テスト株式会社"
  },
  website: "https://akirano-blog.com"
};
export default function App() {
  return (
    <div className="App">
      <PrimaryButton>click</PrimaryButton>
      <br />
      <br />
      <br />
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
