import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

function PrintLetter({ letter, size }) {
  console.log(size);

  //styled에 props를
  //params id값..????
  const navigate = useNavigate(); //navigate()=> 두번째 인자로 보낼 데이터 지정가능!
  //내장된 api = history 보내는 data = 문자열.
  //시리얼라이즈 : 컴퓨터 데이터 교한시 특정포맷으로 만들어서 자기언어에 맞게 해석 = 직렬화
  //직렬화 시킬 수 있는게 한정되어있음
  //함수는 안됨.
  const navigateDetail = (letter) => {
    navigate(`/detail/${letter.id}`, {
      state: letter,
    });
  };
  return (
    <>
      <StLi size={size} key={letter.id} onClick={() => navigateDetail(letter)}>
        <StFigure size={size}>
          {/* <StImage src={letter.avatar} alt="프로필" /> */}
          <StImage src={letter.avatar} alt="프로필" />
        </StFigure>
        <StLetterBox>
          <StNickNameP size={size}>{letter.nickName}</StNickNameP>
          <StComment size={size}>{letter.comment}</StComment>
        </StLetterBox>
      </StLi>
    </>
  );
}

export default PrintLetter;

const StLi = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10xp;
  padding: 15px;
  border: 5px double black;
  column-gap: 10px;
  //detail용
  width: ${({ size }) => (size === "home" ? "450px" : "900px")};
  ${({ size }) => {
    if (size === "home") {
      return css`
        cursor: pointer;
        &:hover {
          color: #ff0055;
          border: 5px double #ff0055;
        }
        margin: 10px auto 10px auto;
      `;
    } else {
      return css`
        height: 300px;
        margin-top: 100px;
      `;
    }
  }};
`;

const StLetterBox = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const StFigure = styled.figure`
  ${({ size }) => {
    if (size === "home") {
      return css`
        width: 100px;
        height: 100px;
      `;
    } else {
      return css`
        width: 200px;
        height: 200px;
        margin: auto 20px auto 20px;
      `;
    }
  }}
`;
const StImage = styled.img`
  width: 100%;
  height: 100%;
`;
const StNickNameP = styled.p`
  width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.7rem;
  ${({ size }) => {
    if (size === "detail") {
      return css`
        margin: 15px;
      `;
    }
  }}
`;
const StComment = styled.p`
  width: ${({ size }) => (size === "home" ? "300px" : "600px")};
  ${({ size }) => {
    if (size === "home") {
      return css`
        white-space: nowrap; //줄바꿈제어
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 10px;
      `;
    } else {
      return css`
        width: 600px;

        height: 200px;
      `;
    }
  }}
  font-size: 1.2rem;
`;
