import { Header } from "../atom/layout/Header";

export const HeaderOnryLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
