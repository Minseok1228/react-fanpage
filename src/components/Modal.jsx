import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DetailBtn from "./DetailBtn";

//모달에 보여줄거
//
function Modal({ letter, fanletters, setFanletters, modalopen, setModalOpen }) {
  const [commentChange, setCommentChange] = useState();
  const navigate = useNavigate();

  const changeCommentBtn = () => {
    if (!commentChange) {
      alert("수정사항을 입력해 주세요");
    } else {
      if (window.confirm("이렇게 수정하시겠습니까")) {
        const changedletter = { ...letter, comment: commentChange };
        const changedFanLetters = fanletters.map((letter) => {
          return letter.id === changedletter.id ? changedletter : letter;
        });
        setFanletters(changedFanLetters);
        navigate("/");
      }
    }
  };
  const cancelChange = () => {
    setModalOpen(false);
  };
  return (
    <>
      <StModal $modalopen={modalopen}>
        <StFigure>
          <StImage src={letter.avatar} alt="프로필" />
        </StFigure>
        <StLetterBox>
          <StNickNameP>{letter.nickName}</StNickNameP>
          <StComment
            maxLength={150}
            defaultValue={letter.comment}
            value={commentChange}
            onChange={(e) => {
              setCommentChange(e.target.value);
            }}
          />
        </StLetterBox>
      </StModal>
      <StBtnBox>
        <DetailBtn detailBtn={changeCommentBtn}>완료</DetailBtn>
        <DetailBtn detailBtn={cancelChange}>취소</DetailBtn>

        {/*   return <StDetailBtn onClick={() => detailBtn(id)}>{children}</StDetailBtn>;
              <DetailBtn detailBtn={changeCommentBtn} id={param.id}>

 */}
      </StBtnBox>
    </>
  );
}
//text 200자
export default Modal;
const StBtnBox = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

const StModal = styled.div`
  border: 5px double black;

  width: 900px;
  display: flex;
  flex-direction: row;
  gap: 10xp;
  padding: 15px;
  margin-top: 100px;
  column-gap: 10px;

  height: 300px;
`;
const StFigure = styled.figure`
  width: 200px;
  height: 200px;
  margin: auto 20px auto 20px;
`;

const StLetterBox = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StImage = styled.img`
  width: 100%;
  height: 100%;
`;
const StNickNameP = styled.p`
  margin: 15px;
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.7rem;
`;
const StComment = styled.textarea`
  height: 200px;
  width: 600px;
  font-size: 1.1rem;
`;
