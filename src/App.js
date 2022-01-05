import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import "./styles.css";

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
    </div>
  );
}
