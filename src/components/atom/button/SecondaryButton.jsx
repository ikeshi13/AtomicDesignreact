import { BaseButton } from "./BaseButton";
import styled from "styled-components";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <Sbutton onClick={onClick}>{children}</Sbutton>;
};

const Sbutton = styled(BaseButton)`
  background-color: #11999e;
`;
