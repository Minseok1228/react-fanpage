import React from "react";
import Input from "./Input";
import uuid from "react-uuid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { writeTo } from "../redux/modules/writeToMeat";
import { addFanLetter } from "../redux/modules/fanletters";
import { addNickName } from "../redux/modules/nickName";
import { addComment } from "../redux/modules/comment";
const DEFAULT_IMG = "https://t1.daumcdn.net/cfile/tistory/99FD943A5C821D7429";
function Form() {
  const meats = useSelector((state) => {
    return state.MEATS;
  });
  const nickName = useSelector((state) => {
    return state.nickName;
  });
  const comment = useSelector((state) => {
    return state.comment;
  });
  const writeToMeat = useSelector((state) => {
    return state.writeToMeat;
  });

  const fanletters = useSelector((state) => {
    return state.fanletters;
  });

  const dispatch = useDispatch();

  const submitBtnHandler = (e) => {
    e.preventDefault();
    if (!nickName) {
      return alert("10자 내의 닉네임을 입력해 주세요.");
    } else if (!comment) {
      return alert("150자 내의 내용을 입력해 주세요.");
    }
    const newFanLetter = {
      id: uuid(),
      writeto: writeToMeat,
      nickName,
      comment,
      avatar: DEFAULT_IMG,
    };
    dispatch(addFanLetter([...fanletters, newFanLetter]));
    dispatch(addNickName(""));
    dispatch(addComment(""));
  };
  const selectMeat = (e) => {
    dispatch(writeTo(e.target.value));
  };

  const addNickNameFunc = (e) => {
    dispatch(addNickName(e.target.value));
  };
  const addCommentFunc = (e) => {
    dispatch(addComment(e.target.value));
  };
  return (
    <StForm onSubmit={submitBtnHandler}>
      <StFormSection>
        <StFormP>닉네임 : </StFormP>
        <Input
          state={nickName}
          dispatch={addNickNameFunc}
          length={10}
          msg={"10자 내로 입력해 주세요."}
        />
      </StFormSection>
      <StFormSection>
        <StFormP>내용 : </StFormP>

        <Input
          state={comment}
          dispatch={addCommentFunc}
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
      <StSubmitBtn>팬레터 등록</StSubmitBtn>
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
