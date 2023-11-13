import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const StLi = styled.li`
  background-color: yellow;
  display: flex;
  flex-direction: row;
  gap: 10xp;
  padding: 15px;
  margin: 20px;
  column-gap: 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;
const StLetterBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const StFigure = styled.figure`
  width: 100px;
  height: 100px;
`;
const StImage = styled.img`
  width: 100%;
  height: 100%;
`;
const StNickNameP = styled.p`
  font-size: 2rem;
`;
const StComment = styled.p`
  font-size: 1.2rem;
`;
function PrintLetter({ letter }) {
  //params id값..????
  const navigate = useNavigate(); //navigate()=> 두번째 인자로 보낼 데이터 지정가능!
  //내장된 api = history 보내는 data = 문자열.
  //시리얼라이즈 : 컴퓨터 데이터 교한시 특정포맷으로 만들어서 자기언어에 맞게 해석 = 직렬화
  //직렬화 시킬 수 있는게 한정되어있음
  //함수는 안됨.
  const navigateDetail = (letter) => {
    navigate(`/detail/${letter.id}`, {
      // state: letter,
      state: letter,
      // fanletters: fanletters,
      // setFanletters: JSON.stringify(setFanletters), //setState는 함수 => 시리얼라이즈 못함 = stringify안됨/
    });
  };
  return (
    <StLi key={letter.id} onClick={() => navigateDetail(letter)}>
      <StFigure>
        {/* <StImage src={letter.avatar} alt="프로필" /> */}
        <StImage src={letter.avatar} alt="프로필" />
      </StFigure>
      <StLetterBox>
        <StNickNameP>{letter.nickName}</StNickNameP>
        <StComment>{letter.comment}</StComment>
      </StLetterBox>
    </StLi>
  );
}

export default PrintLetter;
