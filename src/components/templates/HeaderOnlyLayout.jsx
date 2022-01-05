import { Header } from "../layout/Header";

export const HeaderOnlyLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
