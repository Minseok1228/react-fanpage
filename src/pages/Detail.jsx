import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PrintLetter from "../components/PrintLetter";
function Detail({ fanletters, setFanletters }) {
  console.log(fanletters);
  console.log(setFanletters);
  const navigate = useNavigate();
  // const params = useParams();
  const location = useLocation();
  const letter = location.state; //navigate로 쏜거 가져옴
  const param = useParams();
  //삭제하면서 home으로 돌아옴, => 확인누르면 home으로
  //initial은 왜 안사라지니?
  const deleteLetterBtn = (id) => {
    const newLetters = fanletters.filter((letter) => {
      // console.log(id); 아니 어이강벗네 겁나안되다가 콘솔찍으려니
      // console.log(letter.id);
      return letter.id !== id;
    });
    console.log(newLetters);
    setFanletters(newLetters);
  };
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <div>
        <PrintLetter letter={letter} />
        <button onClick={() => deleteLetterBtn(param.id)}>삭제</button>
        <button>수정</button>
      </div>
    </>
  );
}
//state가져오기
//styled-components에 props를 넘김으로 인한 조건부 스타일링 적용 => 선택부분 불들어ㅏ오게

export default Detail;
