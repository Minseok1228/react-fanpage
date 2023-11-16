import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PrintLetter from "../components/PrintLetter";
import DetailBtn from "../components/DetailBtn";
import Modal from "../components/Modal";
import styled from "styled-components";

function Detail({ fanletters, setFanletters }) {
  const navigate = useNavigate();
  const location = useLocation();
  const letter = location.state;
  const param = useParams();

  const deleteLetterBtn = (id) => {
    if (window.confirm("정말 삭제하시겠습니까")) {
      const newLetters = fanletters.filter((letter) => {
        return letter.id !== id;
      });
      setFanletters(newLetters);
      navigate("/");
    }
  };

  const [modalOpen, setModalOpen] = useState(false);
  console.log(modalOpen);

  const changeCommentBtn = () => {
    setModalOpen(true);
  };
  const goHome = () => {
    navigate("/");
  };

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
