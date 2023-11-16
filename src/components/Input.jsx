import React from "react";
import styled from "styled-components";

const StInpute = styled.input`
  height: 1.8rem;
`;
function Input({ title, state, setState, length, msg }) {
  return (
    <>
      <p>{title}</p>
      <StInpute
        maxLength={length}
        value={state}
        placeholder={msg}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </>
  );
}

export default Input;
