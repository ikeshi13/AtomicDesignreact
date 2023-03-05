import { BaseButton } from "./BaseButton";
import styled from "styled-components";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <Sbutton>{children}</Sbutton>;
};

const Sbutton = styled(BaseButton)`
  background-color: #11999e;
`;
