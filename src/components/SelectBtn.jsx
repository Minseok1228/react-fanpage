import React from "react";
import styled from "styled-components";

const StSelectBtn = styled.button`
  width: 100px;
  height: 80px;
  margin: 0 10px 0 10px;
  font-size: 1.4rem;
  background-color: yellow;
  cursor: pointer;
`;
function SelectBtn({ meatFunc, children }) {
  return <StSelectBtn onClick={meatFunc}>{children}</StSelectBtn>;
}
export default SelectBtn;
