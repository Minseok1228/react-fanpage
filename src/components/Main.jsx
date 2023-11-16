import React from "react";
import Form from "../components/Form";
import styled from "styled-components";
import Filter from "../components/Filter";

function Main({ meats, fanletters, setFanletters, selectedMeat }) {
  return (
    <StMain>
      <Form
        meats={meats}
        fanletters={fanletters}
        setFanletters={setFanletters}
      />
      <StUl>
        <Filter
          meat={selectedMeat}
          fanletters={fanletters}
          setFanletters={setFanletters}
        />
      </StUl>
    </StMain>
  );
}

export default Main;

const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 10px;
`;
const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
