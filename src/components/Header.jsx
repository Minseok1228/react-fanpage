import React from "react";
import SelectBtn from "../components/SelectBtn";
import styled from "styled-components";
import headerImg from "../assets/header.jpeg";

function Header({ selectedMeat, setSelectedMeat, meats }) {
  const meatFanLetter = (meat) => {
    setSelectedMeat(meat);
  };
  return (
    <>
      <Stheader>
        <StrH1>고 기 고 기</StrH1>
        <StSelectBox>
          {meats.map((meat) => {
            return (
              <SelectBtn
                key={meat}
                selectedMeat={selectedMeat}
                meatFunc={() => meatFanLetter(meat)}
              >
                {meat}
              </SelectBtn>
            );
          })}
        </StSelectBox>
      </Stheader>
    </>
  );
}
export default Header;
const Stheader = styled.header`
  background-image: url(${headerImg});
  /* background-image: url("../assets/header.jpeg"); */

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;
const StrH1 = styled.h1`
  font-size: 4rem;
  font-weight: 900;
`;
const StSelectBox = styled.div``;
