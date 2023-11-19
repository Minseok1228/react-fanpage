import React, { useContext } from "react";
import SelectBtn from "../components/SelectBtn";
import styled from "styled-components";
import headerImg from "../assets/header.jpeg";
import { StateContext } from "../context/stateContext";
import { useDispatch } from "react-redux";
import { selectMeat } from "../redux/modules/selectedMeat";

function Header() {
  const dispatch = useDispatch();
  const handleMeatSelect = (meat) => {
    dispatch(selectMeat(meat));
  };
  const { meats } = useContext(StateContext);

  return (
    <>
      <Stheader>
        <StrH1>고 기 고 기</StrH1>
        <StSelectBox>
          {meats.map((meat) => {
            return (
              <SelectBtn
                key={meat}
                handleMeatSelect={() => handleMeatSelect(meat)}
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
