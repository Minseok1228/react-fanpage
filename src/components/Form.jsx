import React from "react";
import Input from "./Input";
import { useState } from "react";
import uuid from "react-uuid";
import styled from "styled-components";

const StForm = styled.form`
  background-color: yellow;
  width: 650px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;
const StFormSection = styled.section`
  background-color: blue;
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
// const StOption = styled.option`
//   font-size: 1.5rem;
// `;
const StSubmitBtn = styled.button`
  font-size: 1.8rem;
  cursor: pointer;
`;
const DEFAULT_IMG = "https://t1.daumcdn.net/cfile/tistory/99FD943A5C821D7429";
function Form({ meats, fanletters, setFanletters }) {
  const [nickName, setNickName] = useState("");
  const [comment, setComment] = useState("");
  const [selectedMeat, setSelecedtMeat] = useState("새우살");
  const submitBtnHandler = (e) => {
    e.preventDefault();
    const newFanLetter = {
      id: uuid(),
      writedto: selectedMeat,
      nickName,
      comment,
      avatar: DEFAULT_IMG,
    };
    setFanletters([...fanletters, newFanLetter]);
    setNickName("");
    setComment("");
  };
  const selectMeat = (e) => {
    setSelecedtMeat(e.target.value);
  };

  return (
    <StForm>
      {/**유효성검사 */}
      <StFormSection>
        <Input title={"닉네임 :"} state={nickName} setState={setNickName} />
      </StFormSection>
      <StFormSection>
        <Input title={"내용 :"} state={comment} setState={setComment} />
      </StFormSection>
      <StFormSection>
        <label>어느 부위에게 보내실 건가요?</label>
        <StSelect onChange={selectMeat}>
          {meats.map((meat) => {
            return <option key={meat}>{meat}</option>; //옵션도 일종의 input value이다
          })}
        </StSelect>
      </StFormSection>
      <StSubmitBtn onClick={submitBtnHandler}>팬레터 등록</StSubmitBtn>
    </StForm>
  );
}

export default Form;
