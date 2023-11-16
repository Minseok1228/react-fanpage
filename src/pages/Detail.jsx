import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PrintLetter from "../components/PrintLetter";
import DetailBtn from "../components/DetailBtn";
import Modal from "../components/Modal";
import styled from "styled-components";
function Detail({ fanletters, setFanletters }) {
  console.log(fanletters);
  const navigate = useNavigate();
  const location = useLocation();
  const letter = location.state; //navigate로 쏜거 가져옴
  const param = useParams();
  console.log("param:", param);
  //확인메시지 띄워서 확인 누를시 작동.

  const deleteLetterBtn = (id) => {
    if (window.confirm("정말 삭제하시겠습니까")) {
      const newLetters = fanletters.filter((letter) => {
        return letter.id !== id;
      });
      setFanletters(newLetters);
      navigate("/");
    }
  };

  //모다르르르르를
  /*state로 노출여부 관리
   */
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);

  const changeCommentBtn = () => {
    setModalOpen(true);
  };
  const goHome = () => {
    navigate("/");
  };

  //printletter 컴포넌트를 사용하고 싶따 조건부 스타일링을 통해 사이즈변경
  return (
    <>
      <DetailBtn detailBtn={goHome} btnCss={"toHome"}>
        Home
      </DetailBtn>
      <Container>
        {modalOpen ? (
          <Modal
            letter={letter}
            fanletters={fanletters}
            setFanletters={setFanletters}
            modalopen={modalOpen}
            setModalOpen={setModalOpen}
          />
        ) : (
          <>
            <PrintLetter letter={letter} size={"detail"} />
            <StBtnBox>
              <DetailBtn detailBtn={deleteLetterBtn} id={param.id}>
                삭제
              </DetailBtn>
              <DetailBtn detailBtn={changeCommentBtn} id={param.id}>
                수정
              </DetailBtn>
            </StBtnBox>
          </>
        )}
      </Container>
    </>
  );
}
//state가져오기
//styled-components에 props를 넘김으로 인한 조건부 스타일링 적용 => 선택부분 불들어ㅏ오게

export default Detail;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StBtnBox = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;
