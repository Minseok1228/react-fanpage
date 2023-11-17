import React, { useContext } from "react";
import Input from "./Input";
import uuid from "react-uuid";
import styled from "styled-components";
import { StateContext } from "../context/stateContext";

const DEFAULT_IMG = "https://t1.daumcdn.net/cfile/tistory/99FD943A5C821D7429";
function Form() {
  const {
    fanletters,
    setFanletters,
    meats,
    nickName,
    setNickName,
    comment,
    setComment,
    writeToMeat,
    setWritetoMeat,
  } = useContext(StateContext);

  const submitBtnHandler = (e) => {
    e.preventDefault();
    if (!nickName) {
      return alert("10자 내의 닉네임을 입력해 주세요.");
    } else if (!comment) {
      return alert("150자 내의 내용을 입력해 주세요.");
    }
    const newFanLetter = {
      id: uuid(),
      writedto: writeToMeat,
      nickName,
      comment,
      avatar: DEFAULT_IMG,
    };
    setFanletters([...fanletters, newFanLetter]);
    setNickName("");
    setComment("");
  };
  const selectMeat = (e) => {
    setWritetoMeat(e.target.value);
  };

  return (
    <StForm>
      <StFormSection>
        <StFormP>닉네임 : </StFormP>
        <Input
          state={nickName}
          setState={setNickName}
          length={10}
          msg={"10자 내로 입력해 주세요."}
        />
      </StFormSection>
      <StFormSection>
        <StFormP>내용 : </StFormP>

        <Input
          state={comment}
          setState={setComment}
          length={150}
          msg={"150자 내로 입력해 주세요."}
        />
      </StFormSection>
      <StFormSection>
        <StLabel>최애의 부위를 선택해 주세요</StLabel>
        <StSelect onChange={selectMeat}>
          {meats.map((meat) => {
            return <option key={meat}>{meat}</option>;
          })}
        </StSelect>
      </StFormSection>
      <StSubmitBtn onClick={submitBtnHandler}>팬레터 등록</StSubmitBtn>
    </StForm>
  );
}

export default Form;

const StForm = styled.form`
  border: 5px double black;
  width: 650px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
const StFormSection = styled.section`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
const StSelect = styled.select`
  height: 2rem;
  cursor: pointer;
`;
const StSubmitBtn = styled.button`
  font-size: 1.8rem;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
const StFormP = styled.p`
  margin: 10px;
`;
const StLabel = styled.label`
  margin: 10px;
`;
