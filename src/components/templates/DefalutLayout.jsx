import { Footer } from "../layout/Footer";
import { Header } from "../layout/Header";

export const DefalutLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
