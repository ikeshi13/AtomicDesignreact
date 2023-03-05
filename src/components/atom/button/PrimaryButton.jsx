import { styled } from "styled-components";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <Sbutton>{children}</Sbutton>;
};

const Sbutton = styled.button`
  background-color: #40514e;
  color: #fff;
`;
