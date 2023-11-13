import React from "react";
import styled from "styled-components";

const StInpute = styled.input`
  height: 1.5rem;
`;
function Input({ title, state, setState }) {
  return (
    <>
      <p>{title}</p>
      <StInpute
        required
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
    </>
  );
}

export default Input;
