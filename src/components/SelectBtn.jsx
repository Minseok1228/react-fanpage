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
  return (
    <StSelectBtn onClick={meatFunc}>{children}</StSelectBtn>

    // <>
    //   {meats.map((meat) => {
    //     return (
    //       <button key={meat} onClick={showLetter(true,false,false)}>
    //         {meat}
    //       </button>
    //     );
    //   })}
    // </>
  );
}
export default SelectBtn;
