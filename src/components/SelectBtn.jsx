import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { StateContext } from "../context/stateContext";

function SelectBtn({ meatFunc, children }) {
  const { selectedMeat } = useContext(StateContext);
  return (
    <StSelectBtn
      children={children}
      $selectedmeat={selectedMeat}
      onClick={meatFunc}
    >
      {children}
    </StSelectBtn>
  );
}
export default SelectBtn;

const StSelectBtn = styled.button`
  width: 100px;
  height: 80px;
  margin: 0 10px 0 10px;
  font-size: 1.4rem;
  border: 3px solid rgb(232, 136, 114);
  background-color: rgb(232, 136, 114);
  &:hover {
    background-color: #ff0055;
    border: 3px solid #ff0055;
  }

  border-radius: 30%;
  ${({ $selectedmeat, children }) => {
    if ($selectedmeat === children) {
      return css`
        background-color: #ff0055;
        border: 3px solid #ff0055;

        transform: scale(1.2);
      `;
    }
  }};
  cursor: pointer;
`;
