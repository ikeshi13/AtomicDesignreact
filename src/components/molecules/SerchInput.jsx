import { PrimaryButton } from "../atom/button/PrimaryButton";
import { Input } from "../atom/input/Input";
import styled from "styled-components";

export const SerchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
