import React, { useContext } from "react";
import PrintLetter from "./PrintLetter";
import styled from "styled-components";
import { StateContext } from "../context/stateContext";

function Filter() {
  const { fanletters, selectedMeat } = useContext(StateContext);
  const letterFilter = () => {
    const filteredLetters = fanletters.filter((letter) => {
      return letter.writedto === selectedMeat;
    });
    return filteredLetters;
  };
  const emptyChecker = letterFilter();

  return emptyChecker.length === 0 ? (
    <>
      <StMsg>이 부위에 메세지를 남겨주신 분들이 없어요.</StMsg>
      <StMsg> 메세지를 남겨주세요.</StMsg>
    </>
  ) : (
    fanletters
      .filter((letter) => {
        return letter.writedto === selectedMeat;
      })
      .reverse()
      .map((letter) => {
        return <PrintLetter key={letter.id} letter={letter} size={"home"} />;
      })
  );
}

export default Filter;

const StMsg = styled.p`
  width: 500px;
  margin: 20px;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
`;
